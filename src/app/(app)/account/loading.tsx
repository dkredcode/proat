import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-32 md:h-40 w-full rounded-lg" /> {/* Banner Skeleton */}

      {/* Alert Skeleton */}
      <div className="p-4 rounded-lg border bg-card flex items-start space-x-3">
        <Skeleton className="h-5 w-5 rounded-full mt-1" />
        <div className="flex-grow space-y-1">
          <Skeleton className="h-5 w-1/4" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>

      {/* Account Summary Skeleton */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <div className="flex items-center space-x-3 mb-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div>
            <Skeleton className="h-7 w-40 mb-1" />
            <Skeleton className="h-4 w-56" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-32" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions Skeleton */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <Skeleton className="h-6 w-32 mb-2" />
        <Skeleton className="h-4 w-48 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-full" />
        </div>
      </div>
      
      {/* Other Services Skeleton */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
        <Skeleton className="h-6 w-40 mb-2" />
        <Skeleton className="h-4 w-56 mb-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1,2,3,4].map(i => (
                 <div key={i} className="p-6 bg-secondary rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <Skeleton className="h-7 w-7 rounded-md" />
                            <Skeleton className="h-5 w-32" />
                        </div>
                        <Skeleton className="h-5 w-5" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
