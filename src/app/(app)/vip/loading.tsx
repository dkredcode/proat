import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-48 md:h-64 w-full rounded-lg" /> {/* Banner Skeleton */}

      {/* VIP Status Skeleton */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div>
            <Skeleton className="h-6 w-48 mb-1" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center space-x-3 p-4 bg-background/30 rounded-lg">
              <Skeleton className="h-7 w-7 rounded-md" />
              <div>
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-5 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIP Levels Section Title Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-8 w-1/2 mb-1" />
        <Skeleton className="h-5 w-3/4" />
      </div>
      
      {/* VIP Levels Card Grid Skeleton */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>

      {/* Upgrade Form Skeleton */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 mt-8 space-y-6">
        <Skeleton className="h-7 w-1/3 mb-2" />
        <Skeleton className="h-5 w-full" />
        <div className="p-4 bg-muted/50 rounded-lg border border-dashed border-border space-y-2">
            <Skeleton className="h-5 w-1/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
        </div>
        <div>
            <Skeleton className="h-5 w-1/5 mb-1.5" />
            <Skeleton className="h-10 w-full" />
        </div>
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}

function CardSkeleton() { // Reusable card skeleton for VIP levels
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
      <div className="flex justify-between items-center mb-2">
        <Skeleton className="h-7 w-24" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-4 w-3/4 mb-4" />
      <Skeleton className="h-5 w-1/3 mb-1" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-full mb-1" />
      <Skeleton className="h-4 w-5/6 mb-1" />
      <Skeleton className="h-10 w-full mt-4" />
    </div>
  );
}
