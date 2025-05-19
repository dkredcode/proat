import { PageBanner } from '@/components/shared/PageBanner';
import { AdvisorForm } from '@/components/sections/advisor/AdvisorForm';

export default function AdvisorPage() {
  return (
    <div className="space-y-8">
      <PageBanner
        title="AI-Powered Investment Advisor"
        subtitle="Let our intelligent system analyze your financial goals and risk tolerance to suggest optimal USDT financing strategies tailored just for you."
        imageUrl="https://placehold.co/1200x250.png"
        dataAiHint="ai brain network"
        variant="standard"
      />
      <AdvisorForm />
    </div>
  );
}
