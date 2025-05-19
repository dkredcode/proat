import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-48 md:h-64 w-full rounded-lg" /> {/* Banner Skeleton */}

      <div className="rounded-lg border bg-card text-card-foreground shadow-xl p-6 md:p-8 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
            <Skeleton className="h-8 w-8 rounded-md" />
            <div>
                <Skeleton className="h-7 w-64 mb-1" />
                <Skeleton className="h-4 w-80" />
            </div>
        </div>
        
        {/* Form Fields Skeleton */}
        <div className="space-y-2">
            <Skeleton className="h-5 w-32" /> {/* Label */}
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Skeleton className="h-12 flex-1 rounded-md" />
                <Skeleton className="h-12 flex-1 rounded-md" />
                <Skeleton className="h-12 flex-1 rounded-md" />
            </div>
        </div>

        <div className="space-y-2">
            <Skeleton className="h-5 w-40" /> {/* Label */}
            <Skeleton className="h-24 w-full rounded-md" /> {/* Textarea */}
        </div>

        <div className="space-y-2">
            <Skeleton className="h-5 w-48" /> {/* Label */}
            <Skeleton className="h-10 w-full rounded-md" /> {/* Input */}
        </div>
        
        <Skeleton className="h-12 w-full rounded-md mt-4" /> {/* Button */}
      </div>
    </div>
  );
}
