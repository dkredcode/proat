'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { KeyRound, Info, CheckCircle, XCircle } from 'lucide-react';
import type { VipLevel } from '@/types';
import { useToast } from '@/hooks/use-toast';

type UpgradeFormProps = {
  selectedLevel: VipLevel | null;
};

export function UpgradeForm({ selectedLevel }: UpgradeFormProps) {
  const [tradeKey, setTradeKey] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedLevel) {
      setMessage({ type: 'error', text: 'Please select a VIP level to upgrade.' });
      return;
    }
    if (!tradeKey) {
      setMessage({ type: 'error', text: 'Please enter your Trade Key.' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success/failure
    if (tradeKey === "correct_key") { // Replace with actual validation
      setMessage({ type: 'success', text: `Successfully upgraded to ${selectedLevel.name}!` });
      toast({
        title: "Upgrade Successful",
        description: `You are now ${selectedLevel.name}.`,
        variant: "default", // This variant does not exist, default is default.
      });
      setTradeKey(''); // Clear trade key on success
    } else {
      setMessage({ type: 'error', text: 'Invalid Trade Key or upgrade failed. Please try again.' });
      toast({
        title: "Upgrade Failed",
        description: "Invalid Trade Key or an error occurred.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <Card className="mt-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Upgrade Your VIP Level</CardTitle>
        {selectedLevel ? (
          <CardDescription>
            You are about to upgrade to <span className="font-semibold text-primary">{selectedLevel.name}</span>. 
            This requires a deposit of <span className="font-semibold">{selectedLevel.requirement.toLocaleString()} USDT</span>.
          </CardDescription>
        ) : (
          <CardDescription>Select a VIP level above to see upgrade details.</CardDescription>
        )}
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="p-4 bg-muted/50 rounded-lg border border-dashed border-border">
            <div className="flex items-start space-x-3">
              <Info className="w-5 h-5 text-primary mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Important Notice</h4>
                <p className="text-sm text-muted-foreground">
                  The VIP deposit amount will be locked for the duration of the VIP level's validity period. 
                  Ensure you understand the terms before proceeding. Your Trade Key is required to authorize this upgrade.
                </p>
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="tradeKey" className="flex items-center mb-1.5">
              <KeyRound className="w-4 h-4 mr-2 text-muted-foreground" />
              Trade Key
            </Label>
            <Input
              id="tradeKey"
              type="password"
              placeholder="Enter your secure Trade Key"
              value={tradeKey}
              onChange={(e) => setTradeKey(e.target.value)}
              disabled={!selectedLevel || isLoading}
              required
              className="text-base"
            />
          </div>

          {message && (
            <Alert variant={message.type === 'error' ? 'destructive' : 'default'} className={message.type === 'success' ? 'border-emerald-500 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400' : ''}>
              {message.type === 'success' ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
              <AlertTitle>{message.type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
              <AlertDescription>{message.text}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full text-base py-3" 
            disabled={!selectedLevel || isLoading}
            size="lg"
          >
            {isLoading ? 'Processing Upgrade...' : (selectedLevel ? `Upgrade to ${selectedLevel.name}` : 'Select a Level to Upgrade')}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
