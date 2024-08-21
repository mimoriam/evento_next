import { cn } from "@/lib/utils";

type SkeletonProps = {
  className?: string;
};

function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "h-4 w-[550px] animate-pulse rounded-md bg-white/5",
        className,
      )}
    />
  );
}

export default function SkeletonCard() {
  return (
    <div className="space-y-4">
      <Skeleton className="size-12 rounded-full" />
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  );
}
