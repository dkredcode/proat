import Link from 'next/link';
import { APP_NAME, LOGO_COLOR } from '@/lib/constants';
import { Coins } from 'lucide-react'; // Or a custom Tether 'T' like icon

type LogoProps = {
  className?: string;
  iconSize?: number;
};

export function Logo({ className, iconSize = 28 }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`}>
      <Coins className={`${LOGO_COLOR} group-hover:text-yellow-300 transition-colors`} size={iconSize} aria-hidden="true" />
      <span className={`text-xl font-bold text-foreground group-hover:text-primary transition-colors`}>
        {APP_NAME}
      </span>
    </Link>
  );
}
