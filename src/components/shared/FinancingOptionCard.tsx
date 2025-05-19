'use client';

import type { FinancingOption } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap } from 'lucide-react';

type FinancingOptionCardProps = {
  option: FinancingOption;
  onInvest?: (optionId: string) => void;
};

export function FinancingOptionCard({ option, onInvest }: FinancingOptionCardProps) {
  return (
    <Card className="flex flex-col h-full hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{option.crypto} - {option.duration}</CardTitle>
          {option.popular && <Badge variant="outline" className="bg-primary/10 text-primary border-primary/50"><Zap className="w-3 h-3 mr-1" />Popular</Badge>}
        </div>
        <CardDescription>
          Earn up to <span className="text-lg font-semibold text-emerald-400">{option.yieldPercentage}%</span> APY
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2 text-sm text-muted-foreground">
          {option.minInvestment && (
            <p>Min. Investment: <span className="font-medium text-foreground">{option.minInvestment.toLocaleString()} USDT</span></p>
          )}
          {option.maxInvestment && (
            <p>Max. Investment: <span className="font-medium text-foreground">{option.maxInvestment.toLocaleString()} USDT</span></p>
          )}
          {!option.minInvestment && !option.maxInvestment && (
            <p>Flexible investment amounts.</p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => onInvest?.(option.id)}>
          <TrendingUp className="mr-2 h-4 w-4" /> Invest Now
        </Button>
      </CardFooter>
    </Card>
  );
}
