import type { VipLevel } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Crown, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type VipLevelCardProps = {
  level: VipLevel;
  isSelected: boolean;
  onSelect: (levelId: string) => void;
  currentLevelName?: string;
};

const levelIcons: Record<string, React.ElementType> = {
  VIP0: Star,
  VIP1: Star,
  VIP2: Crown,
  VIP3: Crown,
};

export function VipLevelCard({ level, isSelected, onSelect, currentLevelName }: VipLevelCardProps) {
  const Icon = levelIcons[level.name] || Star;
  const isCurrent = currentLevelName === level.name;

  return (
    <Card 
      className={cn(
        "flex flex-col h-full transition-all duration-300 cursor-pointer",
        isSelected ? "ring-2 ring-primary shadow-primary/30 shadow-xl" : "hover:shadow-lg",
        isCurrent ? "bg-primary/10 border-primary/50" : level.color || "bg-card"
      )}
      onClick={() => onSelect(level.id)}
    >
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <CardTitle className={cn("text-2xl flex items-center", isCurrent ? "text-primary" : "")}>
            <Icon className={cn("w-7 h-7 mr-2", isCurrent ? "text-primary" : "text-yellow-400")} />
            {level.name}
          </CardTitle>
          {isCurrent && <span className="text-xs font-semibold text-primary py-1 px-2 rounded-full bg-primary/20">Current Plan</span>}
        </div>
        <CardDescription className={cn(isCurrent ? "text-primary-foreground/80" : "text-muted-foreground")}>
          Deposit: <span className={cn("font-semibold", isCurrent ? "text-primary-foreground" : "text-foreground")}>{level.requirement.toLocaleString()} USDT</span> | Validity: {level.validity}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className={cn("font-medium mb-1", isCurrent ? "text-primary-foreground" : "text-foreground")}>Key Benefits:</p>
        <ul className="space-y-1.5 text-sm">
          {level.benefits.map((benefit, index) => (
            <li key={index} className={cn("flex items-start", isCurrent ? "text-primary-foreground/90" : "text-muted-foreground")}>
              <CheckCircle className={cn("w-4 h-4 mr-2 mt-0.5 shrink-0", isCurrent ? "text-emerald-300" : "text-emerald-500")} />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
         <Button 
            variant={isSelected ? "default" : "outline"} 
            className="w-full"
            disabled={isCurrent}
          >
            {isCurrent ? "Current Level" : (isSelected ? "Selected" : "Select Level")}
          </Button>
      </CardFooter>
    </Card>
  );
}
