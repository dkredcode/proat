
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PLACEHOLDER_PLATFORM_ACTIVITY } from '@/lib/constants';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowDownToLine, ArrowUpFromLine, HandCoins, SendHorizontal } from 'lucide-react';
import type { PlatformActivity as PlatformActivityType } from '@/types';

const activityIcons: Record<PlatformActivityType['type'], React.ElementType> = {
  deposit: ArrowDownToLine,
  withdrawal: ArrowUpFromLine,
  yield: HandCoins,
  transfer: SendHorizontal,
};

const activityColors: Record<PlatformActivityType['type'], string> = {
  deposit: 'text-emerald-500', 
  withdrawal: 'text-destructive', 
  yield: 'text-sky-500', 
  transfer: 'text-purple-500', 
};

const NUM_ITEMS_IN_VIEW = 5; 
const BASE_ITEM_COUNT = 10; 
const ACTIVITY_GENERATION_INTERVAL_MS = 3000; 
const SCROLL_SPEED_FACTOR = 3; 

const generateRandomActivity = (): PlatformActivityType => {
  const weightedTypes: PlatformActivityType['type'][] = ['deposit', 'deposit', 'deposit', 'withdrawal', 'withdrawal', 'withdrawal', 'yield', 'transfer'];
  const users = ['J***n', 'A***e', 'M***k', 'S***h', 'L***a', 'K***n', 'R***l', 'B***b', 'C***y', 'D***d', 'E***f', 'G***h'];
  
  const randomUser = users[Math.floor(Math.random() * users.length)];
  const randomType = weightedTypes[Math.floor(Math.random() * weightedTypes.length)];
  const randomAmount = Math.floor(Math.random() * 9901) + 100; 

  const now = new Date();
  const dateString = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  return {
    id: crypto.randomUUID(), 
    username: randomUser,
    amount: randomAmount,
    date: dateString,
    type: randomType,
  };
};

export function PlatformActivity() {
  const [baseActivities, setBaseActivities] = useState<PlatformActivityType[]>([]);
  const [displayedActivities, setDisplayedActivities] = useState<PlatformActivityType[]>([]);
  const tableBodyRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    let initialActivities = [...PLACEHOLDER_PLATFORM_ACTIVITY].sort(() => 0.5 - Math.random()); 
    
    while (initialActivities.length < BASE_ITEM_COUNT) {
      initialActivities.unshift(generateRandomActivity());
    }
    if (initialActivities.length > BASE_ITEM_COUNT) {
        initialActivities = initialActivities.slice(0, BASE_ITEM_COUNT);
    }
    setBaseActivities(initialActivities);
  }, []);

  useEffect(() => {
    if (baseActivities.length > 0) {
      setDisplayedActivities([...baseActivities, ...baseActivities]);
    }
  }, [baseActivities]);

  useEffect(() => {
    if (baseActivities.length === 0) return; 

    const intervalId = setInterval(() => {
      setBaseActivities(prevBase => {
        const newActivity = generateRandomActivity();
        const updatedBase = [newActivity, ...prevBase.slice(0, BASE_ITEM_COUNT - 1)];
        return updatedBase;
      });
    }, ACTIVITY_GENERATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, [baseActivities.length]); 

  useEffect(() => {
    if (tableBodyRef.current && baseActivities.length > 0) {
      const duration = baseActivities.length * SCROLL_SPEED_FACTOR;
      tableBodyRef.current.style.animationDuration = `${duration}s`;
    }
  }, [baseActivities.length]);


  return (
    <section className="py-12 md:py-16">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Live Platform Activity</h2>
        <p className="mt-2 text-lg text-muted-foreground">Recent transactions and revenue events on TetherVest.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Continuously updating platform events.</CardDescription>
        </CardHeader>
        <CardContent 
          className="table-scroll-container p-0" 
          style={{ height: `${NUM_ITEMS_IN_VIEW * 56}px` }} 
        >
          {displayedActivities.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow><TableHead className="w-1/12 pl-6"></TableHead><TableHead>Username</TableHead><TableHead>Type</TableHead><TableHead className="text-right">Amount (USDT)</TableHead><TableHead className="text-right pr-6">Date</TableHead></TableRow>
              </TableHeader>
              <TableBody ref={tableBodyRef} className="scrolling-table-body">
                {displayedActivities.map((activity, index) => {
                  const Icon = activityIcons[activity.type];
                  const color = activityColors[activity.type];
                  return (
                    <TableRow key={`${activity.id}-${index}`}> 
                      <TableCell className="pl-6"> 
                        <Icon className={`w-5 h-5 ${color}`} />
                      </TableCell>
                      <TableCell className="font-medium">{activity.username}</TableCell>
                      <TableCell className={`capitalize ${color}`}>{activity.type}</TableCell>
                      <TableCell className="text-right">{activity.amount.toLocaleString()}</TableCell>
                      <TableCell className="text-right text-muted-foreground pr-6">{activity.date}</TableCell> 
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">Loading activities...</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
}
