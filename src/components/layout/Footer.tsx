'use client';

import Link from 'next/link';
import { APP_NAME, FOOTER_LINKS, LOGO_COLOR } from '@/lib/constants';
import { Copyright, Coins } from 'lucide-react'; // Or a custom Tether 'T' like icon
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Coins className={`${LOGO_COLOR} group-hover:text-yellow-300 transition-colors`} size={32} aria-hidden="true" />
              <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {APP_NAME}
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Secure cryptocurrency financing and passive income generation with USDT.
            </p>
          </div>
          
          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Support</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-md font-semibold text-foreground mb-3">Legal</h3>
             <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                 <li>
                  <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center">
            <Copyright className="w-4 h-4 mr-1.5" /> {currentYear} {APP_NAME}. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Built with <span className="text-primary">Next.js</span> and <span className="text-primary">Tailwind CSS</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
