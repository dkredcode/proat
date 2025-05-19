import { HeroSection } from '@/components/sections/homepage/HeroSection';
import { FinancingHighlights } from '@/components/sections/homepage/FinancingHighlights';
import { MarketQuotations } from '@/components/sections/homepage/MarketQuotations';
import { PlatformActivity } from '@/components/sections/homepage/PlatformActivity';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <HeroSection />
      <FinancingHighlights />
      <MarketQuotations />
      <PlatformActivity />
    </div>
  );
}
