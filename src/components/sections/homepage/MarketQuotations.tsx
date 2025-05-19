import { PLACEHOLDER_MARKET_QUOTES } from '@/lib/constants';
import { MarketQuoteCard } from '@/components/shared/MarketQuoteCard';

export function MarketQuotations() {
  return (
    <section className="py-12 md:py-16 bg-card rounded-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-card-foreground">Market Snapshot</h2>
          <p className="mt-2 text-lg text-muted-foreground">Real-time prices for key cryptocurrency pairs.</p>
        </div>
        {PLACEHOLDER_MARKET_QUOTES.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {PLACEHOLDER_MARKET_QUOTES.map((quote) => (
              <MarketQuoteCard key={quote.id} quote={quote} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">Market data is currently unavailable.</p>
        )}
      </div>
    </section>
  );
}
