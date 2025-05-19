'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, CheckCircle, XCircle, Sparkles, BarChartBig } from 'lucide-react';
import type { InvestmentAdvisorInput, InvestmentRecommendation } from '@/types';
import { getInvestmentRecommendations } from '@/ai/flows/investment-advisor'; // Ensure path is correct
import { RISK_TOLERANCE_OPTIONS } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  riskTolerance: z.enum(['low', 'medium', 'high'], { required_error: "Risk tolerance is required." }),
  investmentGoals: z.string().min(10, "Please describe your goals in at least 10 characters.").max(500, "Goals cannot exceed 500 characters."),
  investmentAmount: z.coerce.number().min(50, "Minimum investment is 50 USDT.").positive("Investment amount must be positive."),
});

export function AdvisorForm() {
  const [recommendations, setRecommendations] = useState<InvestmentRecommendation[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<InvestmentAdvisorInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      riskTolerance: 'medium',
      investmentGoals: '',
      investmentAmount: 1000,
    },
  });

  async function onSubmit(values: InvestmentAdvisorInput) {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      const result = await getInvestmentRecommendations(values);
      if (result && result.recommendations) {
        setRecommendations(result.recommendations);
        toast({ title: "Recommendations Generated!", description: "Your personalized investment advice is ready." });
      } else {
        setError("Could not retrieve recommendations. Please try again.");
        toast({ title: "Error", description: "Failed to generate recommendations.", variant: "destructive" });
      }
    } catch (err) {
      console.error("Advisor error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred.";
      setError(`Failed to get recommendations: ${errorMessage}`);
      toast({ title: "Error", description: `Failed to get recommendations: ${errorMessage}`, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card className="shadow-xl">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8 text-primary" />
            <div>
                <CardTitle className="text-2xl md:text-3xl">AI Investment Advisor</CardTitle>
                <CardDescription>Get personalized USDT financing recommendations based on your profile.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            <div>
              <Label className="text-base">Risk Tolerance</Label>
              <Controller
                control={form.control}
                name="riskTolerance"
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col sm:flex-row gap-4 mt-2"
                  >
                    {RISK_TOLERANCE_OPTIONS.map(option => (
                        <Label key={option.value} htmlFor={option.value} className="flex items-center space-x-2 p-3 border rounded-md hover:bg-accent has-[:checked]:bg-primary/10 has-[:checked]:border-primary cursor-pointer flex-1">
                            <RadioGroupItem value={option.value} id={option.value} />
                            <span>{option.label}</span>
                        </Label>
                    ))}
                  </RadioGroup>
                )}
              />
              {form.formState.errors.riskTolerance && <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.riskTolerance.message}</p>}
            </div>

            <div>
              <Label htmlFor="investmentGoals" className="text-base">Investment Goals</Label>
              <Textarea
                id="investmentGoals"
                placeholder="E.g., long-term growth, saving for a major purchase, generating passive income..."
                {...form.register("investmentGoals")}
                className="mt-1 min-h-[100px] text-base"
                disabled={isLoading}
              />
              {form.formState.errors.investmentGoals && <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.investmentGoals.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="investmentAmount" className="text-base">Investment Amount (USDT)</Label>
              <Input
                id="investmentAmount"
                type="number"
                placeholder="Enter amount in USDT"
                {...form.register("investmentAmount")}
                className="mt-1 text-base"
                disabled={isLoading}
              />
              {form.formState.errors.investmentAmount && <p className="text-sm font-medium text-destructive mt-1">{form.formState.errors.investmentAmount.message}</p>}
            </div>

            {error && (
              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full text-lg py-3" disabled={isLoading} size="lg">
              {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Sparkles className="mr-2 h-5 w-5" />}
              {isLoading ? 'Generating Advice...' : 'Get Recommendations'}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {recommendations && recommendations.length > 0 && (
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center"><BarChartBig className="mr-2 h-7 w-7 text-emerald-500" /> Your Investment Recommendations</CardTitle>
            <CardDescription>Based on your input, here are some suggested financing options:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 border rounded-lg bg-secondary/30 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-primary">{rec.financingOption}</h3>
                <p className="text-sm text-muted-foreground">Duration: {rec.duration} | Expected Yield: <span className="font-bold text-emerald-500">{rec.yieldPercentage}%</span></p>
                <p className="mt-2 text-foreground">{rec.reasoning}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
       {recommendations && recommendations.length === 0 && !isLoading && (
         <Alert className="mt-8">
            <CheckCircle className="h-4 w-4" />
            <AlertTitle>No Specific Recommendations</AlertTitle>
            <AlertDescription>We couldn't find specific recommendations for your current profile. Please try adjusting your inputs or explore our general financing options.</AlertDescription>
        </Alert>
      )}
    </div>
  );
}
