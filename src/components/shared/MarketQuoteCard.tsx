import type { MarketQuote } from '@/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type MarketQuoteCardProps = {
  quote: MarketQuote;
};

export function MarketQuoteCard({ quote }: MarketQuoteCardProps) {
  const isPositive = quote.dailyChange >= 0;
  const changeColor = isPositive ? 'text-emerald-500' : 'text-red-500'; // Using direct Tailwind colors for green/red

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{quote.pair}</CardTitle>
        {isPositive ? (
          <ArrowUpRight className={cn("h-4 w-4", changeColor)} />
        ) : (
          <ArrowDownRight className={cn("h-4 w-4", changeColor)} />
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${quote.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
        <p className={cn("text-xs", changeColor)}>
          {isPositive ? '+' : ''}{quote.dailyChange.toFixed(2)}% today
        </p>
      </CardContent>
    </Card>
  );
}
