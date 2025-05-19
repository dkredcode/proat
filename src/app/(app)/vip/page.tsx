'use client';
import React, { useState }from 'react';
import { PageBanner } from '@/components/shared/PageBanner';
import { VipStatus } from '@/components/sections/vip/VipStatus';
import { VipLevels } from '@/components/sections/vip/VipLevels';
import { UpgradeForm } from '@/components/sections/vip/UpgradeForm';
import { PLACEHOLDER_USER_PROFILE } from '@/lib/constants';
import type { VipLevel } from '@/types';

export default function VipPage() {
  const [selectedLevel, setSelectedLevel] = useState<VipLevel | null>(null);

  return (
    <div className="space-y-8">
      <PageBanner
        title="VIP Membership"
        subtitle="Unlock exclusive benefits, higher limits, and premium services by upgrading your VIP level."
        imageUrl="https://placehold.co/1200x250.png"
        dataAiHint="exclusive gold pattern"
        variant="standard"
      />
      <VipStatus user={PLACEHOLDER_USER_PROFILE} />
      <VipLevels onLevelSelect={setSelectedLevel} selectedLevelId={selectedLevel?.id || null}/>
      <UpgradeForm selectedLevel={selectedLevel} />
    </div>
  );
}
