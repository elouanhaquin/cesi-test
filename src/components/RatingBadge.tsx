
import { cn } from "@/lib/utils";

interface RatingBadgeProps {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const RatingBadge = ({ rating, size = "md", className }: RatingBadgeProps) => {
  const getBgColor = () => {
    if (rating >= 9) return "bg-green-700";
    if (rating >= 7) return "bg-green-600";
    if (rating >= 5) return "bg-yellow-500";
    if (rating >= 3) return "bg-orange-500";
    return "bg-red-600";
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "text-xs w-10 h-10";
      case "lg":
        return "text-xl w-20 h-20";
      default:
        return "text-base w-14 h-14";
    }
  };

  return (
    <div 
      className={cn(
        "rounded-full flex items-center justify-center font-bold text-white shadow-lg",
        getBgColor(),
        getSizeClasses(),
        className
      )}
    >
      {rating.toFixed(1)}
    </div>
  );
};

export default RatingBadge;
