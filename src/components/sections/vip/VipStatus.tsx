import { PLACEHOLDER_USER_PROFILE } from '@/lib/constants';
import type { UserProfile } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Crown, ShieldCheck, TrendingUp, Banknote } from 'lucide-react';

type VipStatusProps = {
  user: UserProfile;
};

export function VipStatus({ user }: VipStatusProps) {
  return (
    <Card className="mb-8 shadow-lg bg-gradient-to-r from-card to-secondary">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Crown className="w-8 h-8 text-yellow-400" />
          <div>
            <CardTitle className="text-2xl">Hello, {user.username}!</CardTitle>
            <CardDescription className="text-md">Your current VIP status and account overview.</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="flex items-center space-x-3 p-4 bg-background/30 rounded-lg">
          <ShieldCheck className="w-7 h-7 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Current VIP Level</p>
            <p className="text-lg font-semibold">{user.vipLevel}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-background/30 rounded-lg">
          <Banknote className="w-7 h-7 text-emerald-500" />
          <div>
            <p className="text-sm text-muted-foreground">Account Balance</p>
            <p className="text-lg font-semibold">{user.balance.toLocaleString()} USDT</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-4 bg-background/30 rounded-lg">
          <TrendingUp className="w-7 h-7 text-sky-500" />
          <div>
            <p className="text-sm text-muted-foreground">Daily Limit</p>
            <p className="text-lg font-semibold">{user.dailyTransferLimit.toLocaleString()} USDT</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
