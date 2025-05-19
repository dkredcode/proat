'use client';

import { PLACEHOLDER_FINANCING_OPTIONS } from '@/lib/constants';
import { FinancingOptionCard } from '@/components/shared/FinancingOptionCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React, { useState, useMemo } from 'react';
import type { FinancingOption } from '@/types';

export function FinancingOptionsGrid() {
  const [searchTerm, setSearchTerm] = useState('');
  const [durationFilter, setDurationFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('yield_desc'); // 'yield_asc', 'yield_desc', 'duration_asc', 'duration_desc'

  const handleInvest = (optionId: string) => {
    // Placeholder for invest action
    console.log("Invest in option:", optionId);
    // Potentially show a toast or modal
  };
  
  const uniqueDurations = useMemo(() => {
    const durations = new Set(PLACEHOLDER_FINANCING_OPTIONS.map(opt => opt.duration));
    return ['all', ...Array.from(durations)];
  }, []);

  const filteredAndSortedOptions = useMemo(() => {
    let options = PLACEHOLDER_FINANCING_OPTIONS;

    if (searchTerm) {
      options = options.filter(opt => 
        opt.crypto.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opt.duration.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (durationFilter !== 'all') {
      options = options.filter(opt => opt.duration === durationFilter);
    }
    
    return [...options].sort((a, b) => {
        switch (sortOrder) {
            case 'yield_asc': return a.yieldPercentage - b.yieldPercentage;
            case 'yield_desc': return b.yieldPercentage - a.yieldPercentage;
            case 'duration_asc': // This needs a more robust sort if durations are like "30 Days"
                return parseInt(a.duration) - parseInt(b.duration); // Simplified: assumes numeric prefix
            case 'duration_desc':
                return parseInt(b.duration) - parseInt(a.duration); // Simplified
            default: return 0;
        }
    });
  }, [searchTerm, durationFilter, sortOrder]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center p-4 bg-card rounded-lg shadow">
        <Input 
          placeholder="Search options (e.g., USDT, 30 Days)" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="md:flex-grow"
        />
        <div className="flex gap-4 w-full md:w-auto">
            <Select value={durationFilter} onValueChange={setDurationFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Filter by duration" />
                </SelectTrigger>
                <SelectContent>
                    {uniqueDurations.map(dur => (
                        <SelectItem key={dur} value={dur}>{dur === 'all' ? 'All Durations' : dur}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Select value={sortOrder} onValueChange={setSortOrder}>
                <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="yield_desc">Yield (High to Low)</SelectItem>
                    <SelectItem value="yield_asc">Yield (Low to High)</SelectItem>
                    <SelectItem value="duration_asc">Duration (Short to Long)</SelectItem>
                    <SelectItem value="duration_desc">Duration (Long to Short)</SelectItem>
                </SelectContent>
            </Select>
        </div>
      </div>

      {filteredAndSortedOptions.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredAndSortedOptions.map((option) => (
            <FinancingOptionCard key={option.id} option={option} onInvest={handleInvest} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-10 text-lg">
          No financing options match your criteria. Try adjusting your filters.
        </p>
      )}
    </div>
  );
}
