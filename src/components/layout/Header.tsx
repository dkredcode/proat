'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, AUTH_NAV_LINKS, MOCK_USER, MOCK_IS_AUTHENTICATED } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from './Logo';
import { Menu, UserCircle, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from 'react';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Use centralized mock auth state
  const isAuthenticated = MOCK_IS_AUTHENTICATED; 
  const user = MOCK_USER;

  const activeClass = 'text-primary font-semibold';
  const inactiveClass = 'text-muted-foreground hover:text-foreground transition-colors';

  const allNavLinks = React.useMemo(() => {
    return isAuthenticated
      ? NAV_LINKS.filter(link => !link.guest)
      : [...NAV_LINKS.filter(link => !link.auth), ...AUTH_NAV_LINKS];
  }, [isAuthenticated]); // Dependency ensures memoization updates if isAuthenticated changes

  const renderNavLinks = (isMobile = false) =>
    allNavLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className={cn(
          'text-sm py-2',
          pathname === link.href ? activeClass : inactiveClass,
          isMobile ? 'block px-4' : 'px-3'
        )}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
      >
        {link.label}
      </Link>
    ));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1">
          {renderNavLinks()}
        </nav>
        <div className="flex items-center space-x-3">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <UserCircle className="h-6 w-6" />
                  <span className="sr-only">User menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>{user.username}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/account">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/account/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {/* Implement logout functionality here */}
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center space-x-2">
              <Button variant="ghost" asChild className={pathname === '/login' ? activeClass : inactiveClass}>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-0">
                <div className="flex justify-between items-center p-4 border-b">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="py-4 flex flex-col space-y-1">
                  {renderNavLinks(true)}
                   {!isAuthenticated && ( // Show Login/Register in mobile if not authenticated
                    <>
                      <Link href="/login" className={cn('text-sm py-2 block px-4', pathname === '/login' ? activeClass : inactiveClass)} onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                      <Link href="/register" className={cn('text-sm py-2 block px-4', pathname === '/register' ? activeClass : inactiveClass)} onClick={() => setIsMobileMenuOpen(false)}>Register</Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
