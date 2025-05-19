import { ACCOUNT_QUICK_ACTIONS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function QuickActions() {
  return (
    <Card className="mb-8">
        <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Perform common account operations quickly.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {ACCOUNT_QUICK_ACTIONS.map((action) => {
                const Icon = action.icon;
                return (
                <Button key={action.id} variant="outline" size="lg" asChild className="flex flex-col sm:flex-row items-center justify-center h-auto py-4 sm:py-2 text-base sm:text-sm gap-2 hover:bg-accent hover:text-accent-foreground">
                    <Link href={action.href}>
                    <Icon className="w-5 h-5 mb-1 sm:mb-0 sm:mr-2" />
                    {action.title}
                    </Link>
                </Button>
                );
            })}
            </div>
        </CardContent>
    </Card>
  );
}
