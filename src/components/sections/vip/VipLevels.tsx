'use client';

import React, { useState } from 'react';
import { PLACEHOLDER_VIP_LEVELS, PLACEHOLDER_USER_PROFILE } from '@/lib/constants';
import { VipLevelCard } from '@/components/shared/VipLevelCard';
import type { VipLevel as VipLevelType } from '@/types';

type VipLevelsProps = {
  onLevelSelect: (level: VipLevelType) => void;
  selectedLevelId: string | null;
};

export function VipLevels({ onLevelSelect, selectedLevelId }: VipLevelsProps) {
  const currentUserLevelName = PLACEHOLDER_USER_PROFILE.vipLevel;

  const handleSelect = (levelId: string) => {
    const level = PLACEHOLDER_VIP_LEVELS.find(l => l.id === levelId);
    if (level) {
      onLevelSelect(level);
    }
  };

  return (
    <section className="py-8">
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold tracking-tight">VIP Levels & Benefits</h2>
        <p className="mt-1 text-md text-muted-foreground">Choose a VIP level that suits your investment volume and enjoy exclusive benefits.</p>
      </div>
      {PLACEHOLDER_VIP_LEVELS.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PLACEHOLDER_VIP_LEVELS.map((level) => (
            <VipLevelCard
              key={level.id}
              level={level}
              isSelected={selectedLevelId === level.id}
              onSelect={handleSelect}
              currentLevelName={currentUserLevelName}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">VIP level information is currently unavailable.</p>
      )}
    </section>
  );
}
