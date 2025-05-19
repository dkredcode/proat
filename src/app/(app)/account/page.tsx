import { PageBanner } from '@/components/shared/PageBanner';
import { AccountSummary } from '@/components/sections/account/AccountSummary';
import { QuickActions } from '@/components/sections/account/QuickActions';
import { OtherServices } from '@/components/sections/account/OtherServices';
import { PLACEHOLDER_USER_PROFILE } from '@/lib/constants';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bell } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <PageBanner
        title="My Account"
        subtitle="Manage your profile, security settings, and access account services."
        imageUrl="https://placehold.co/1200x200.png"
        dataAiHint="personal finance secure"
        variant="subtle"
      />
      
      <Alert className="border-primary/50 bg-primary/10 text-primary-foreground">
        <Bell className="h-5 w-5 text-primary" />
        <AlertTitle className="text-primary">Important Update!</AlertTitle>
        <AlertDescription>
          We've updated our security protocols. Please review your settings. 
          <a href="/account/security" className="font-semibold underline hover:text-blue-300 ml-1">Review now</a>.
        </AlertDescription>
      </Alert>

      <AccountSummary user={PLACEHOLDER_USER_PROFILE} />
      <QuickActions />
      <OtherServices />
    </div>
  );
}
