'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from '@/components/layout/Logo';
import { Mail, Lock, User, Smartphone, Globe, KeyRound, ArrowRight, Eye, EyeOff, Info } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COUNTRY_CODES } from '@/lib/constants';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Footer } from '@/components/layout/Footer'; // Assuming standard footer is desired

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    countryCode: '',
    mobile: '',
    password: '',
    confirmPassword: '',
    tradeKey: '',
    confirmTradeKey: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showTradeKey, setShowTradeKey] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Login passwords do not match.");
      setIsLoading(false);
      return;
    }
    if (formData.tradeKey !== formData.confirmTradeKey) {
      setError("Trade Keys do not match.");
      setIsLoading(false);
      return;
    }
    // Add more validation as needed

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    // On success:
    // router.push('/login'); // Redirect to login
    alert("Registration successful! Please login."); // Placeholder
    setIsLoading(false);
  };
  
  const commonInputClass = "pl-10 text-base";

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-slate-900">
        <Card className="w-full max-w-lg shadow-2xl bg-card/90 backdrop-blur-sm">
          <CardHeader>
            <div className="flex justify-between items-center mb-4">
                <CardTitle className="text-3xl font-bold">Create Account</CardTitle>
                <Button variant="ghost" asChild className="text-primary hover:underline">
                    <Link href="/login">Login now <ArrowRight className="ml-1 h-4 w-4"/></Link>
                </Button>
            </div>
            <CardDescription>Join TetherVest and start your journey in crypto financing.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              {error && (
                <Alert variant="destructive">
                  <Lock className="h-4 w-4" />
                  <AlertTitle>Registration Failed</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="email" name="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required className={commonInputClass} disabled={isLoading} />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="countryCode">Country Code</Label>
                    <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Select name="countryCode" onValueChange={(value) => handleSelectChange("countryCode", value)} value={formData.countryCode} disabled={isLoading}>
                        <SelectTrigger className={commonInputClass} id="countryCode"><SelectValue placeholder="Select code" /></SelectTrigger>
                        <SelectContent>
                        {COUNTRY_CODES.map(cc => <SelectItem key={cc.value} value={cc.value}>{cc.label}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="mobile">Mobile Number</Label>
                <div className="relative">
                  <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input id="mobile" name="mobile" type="tel" placeholder="Enter mobile number" value={formData.mobile} onChange={handleChange} required className={commonInputClass} disabled={isLoading} />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <Label htmlFor="password">Login Password</Label>
                    <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Create a password" value={formData.password} onChange={handleChange} required className={`${commonInputClass} pr-10`} disabled={isLoading} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" disabled={isLoading}>
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="confirmPassword">Confirm Login Password</Label>
                    <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="confirmPassword" name="confirmPassword" type={showPassword ? "text" : "password"} placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} required className={`${commonInputClass} pr-10`} disabled={isLoading} />
                    </div>
                </div>
              </div>

              <div className="p-3 bg-muted/30 rounded-md border border-dashed border-primary/30">
                <div className="flex items-start space-x-2.5">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-medium text-sm text-primary">Trade Key Information</h4>
                    <p className="text-xs text-muted-foreground">
                      The Trade Key is crucial for all transactions and security operations. Keep it safe and do not share it. It cannot be easily recovered.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                    <Label htmlFor="tradeKey">Trade Key</Label>
                    <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="tradeKey" name="tradeKey" type={showTradeKey ? "text" : "password"} placeholder="Create a Trade Key" value={formData.tradeKey} onChange={handleChange} required className={`${commonInputClass} pr-10`} disabled={isLoading} />
                     <button type="button" onClick={() => setShowTradeKey(!showTradeKey)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" disabled={isLoading}>
                        {showTradeKey ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <Label htmlFor="confirmTradeKey">Confirm Trade Key</Label>
                    <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="confirmTradeKey" name="confirmTradeKey" type={showTradeKey ? "text" : "password"} placeholder="Confirm Trade Key" value={formData.confirmTradeKey} onChange={handleChange} required className={`${commonInputClass} pr-10`} disabled={isLoading} />
                    </div>
                </div>
              </div>
              
              <Button type="submit" className="w-full text-base py-3" disabled={isLoading} size="lg">
                {isLoading ? 'Creating Account...' : 'Register'}
              </Button>
            </form>
          </CardContent>
           <CardFooter className="text-center block">
             <p className="text-xs text-muted-foreground">
                By registering, you agree to our{' '}
                <Link href="/terms" className="font-medium text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="font-medium text-primary hover:underline">Privacy Policy</Link>.
            </p>
          </CardFooter>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
