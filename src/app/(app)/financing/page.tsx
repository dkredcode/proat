import { PageBanner } from '@/components/shared/PageBanner';
import { FinancingOptionsGrid } from '@/components/sections/financing/FinancingOptionsGrid';

export default function FinancingPage() {
  return (
    <div className="space-y-8">
      <PageBanner
        title="USDT Financing Options"
        subtitle="Explore a variety of financing plans to grow your USDT assets. Choose the duration and yield that best suits your investment strategy."
        imageUrl="https://placehold.co/1200x250.png"
        dataAiHint="financial growth charts"
        variant="standard"
      />
      <FinancingOptionsGrid />
    </div>
  );
}
