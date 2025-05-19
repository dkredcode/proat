import { PLACEHOLDER_FINANCING_OPTIONS } from '@/lib/constants';
import { FinancingOptionCard } from '@/components/shared/FinancingOptionCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FinancingHighlights() {
  const highlightedOptions = PLACEHOLDER_FINANCING_OPTIONS.filter(opt => opt.popular).slice(0, 3);

  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Attractive Financing Options</h2>
        <p className="mt-2 text-lg text-muted-foreground">Discover our most popular USDT investment opportunities.</p>
      </div>
      {highlightedOptions.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {highlightedOptions.map((option) => (
            <FinancingOptionCard key={option.id} option={option} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No popular financing options available at the moment.</p>
      )}
      <div className="text-center mt-10 md:mt-12">
        <Button variant="outline" size="lg" asChild>
          <Link href="/financing">
            View All Options <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
