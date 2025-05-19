import { ACCOUNT_OTHER_SERVICES } from '@/lib/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function OtherServices() {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Account Management & Support</CardTitle>
            <CardDescription>Access other account settings and support resources.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ACCOUNT_OTHER_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                <Link key={service.id} href={service.href} className="group block">
                    <div className="p-6 bg-secondary rounded-lg hover:bg-accent hover:shadow-lg transition-all duration-300 h-full">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <Icon className="w-7 h-7 text-primary" />
                                <h3 className="text-lg font-semibold text-accent-foreground">{service.title}</h3>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                        </div>
                        {service.description && <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>}
                    </div>
                </Link>
                );
            })}
            </div>
      </CardContent>
    </Card>
  );
}
