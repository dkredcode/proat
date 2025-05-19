import { PLACEHOLDER_USER_PROFILE } from '@/lib/constants';
import type { UserProfile } from '@/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Banknote, CalendarDays, Gauge, UserCircle2 } from 'lucide-react';

type AccountSummaryProps = {
  user: UserProfile;
};

export function AccountSummary({ user }: AccountSummaryProps) {
  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <div className="flex items-center space-x-3">
            <UserCircle2 className="w-10 h-10 text-primary" />
            <div>
                <CardTitle className="text-2xl md:text-3xl">Hello, {user.username}!</CardTitle>
                <CardDescription>Here's a summary of your TetherVest account.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        <InfoCard
          icon={Banknote}
          title="Account Balance"
          value={`${user.balance.toLocaleString()} USDT`}
          iconColor="text-emerald-500"
        />
        <InfoCard
          icon={Gauge}
          title="Daily Transfer Limit"
          value={`${user.dailyTransferLimit.toLocaleString()} USDT`}
          iconColor="text-sky-500"
        />
        <InfoCard
          icon={CalendarDays}
          title="Monthly Transfer Limit"
          value={`${user.monthlyTransferLimit.toLocaleString()} USDT`}
          iconColor="text-purple-500"
        />
      </CardContent>
    </Card>
  );
}

type InfoCardProps = {
  icon: React.ElementType;
  title: string;
  value: string;
  iconColor?: string;
}

function InfoCard({ icon: Icon, title, value, iconColor = "text-primary" }: InfoCardProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg shadow-sm hover:bg-secondary transition-colors">
      <div className={`p-3 rounded-full bg-background ${iconColor}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-xl font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}
