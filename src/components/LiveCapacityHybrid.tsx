"use client";
import { useState, useEffect } from "react";
import { CAPACITY_CONFIG } from "@/config/capacity";
import { cn } from "@/lib/utils";

const LiveCapacityHybrid = () => {
    const [mounted, setMounted] = useState(false);

    const { TOTAL_SLOTS, OCCUPIED_SLOTS, CAPACITY_TEXT, FULL_TEXT, WARNING_THRESHOLD } = CAPACITY_CONFIG;
    const remainingSlots = Math.max(0, TOTAL_SLOTS - OCCUPIED_SLOTS);
    const isLowCapacity = OCCUPIED_SLOTS >= WARNING_THRESHOLD;
    const fillPercentage = (OCCUPIED_SLOTS / TOTAL_SLOTS) * 100;

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center gap-3 bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-full px-4 py-2 shadow-sm dark:shadow-xl animate-fade-in group">
            <div className="flex items-center gap-3 pr-2">
                <div className="flex flex-col items-end">
                    <span className={cn(
                        "text-[10px] sm:text-xs font-bold uppercase tracking-tighter transition-colors duration-500",
                        remainingSlots === 0 ? "text-red-500" : isLowCapacity ? "text-orange-500" : "text-primary"
                    )}>
                        {remainingSlots === 0 ? FULL_TEXT : `${CAPACITY_TEXT} ${remainingSlots}`}
                    </span>

                    {/* Progress Bar */}
                    <div className="w-16 h-1 bg-black/10 dark:bg-white/10 rounded-full mt-1 overflow-hidden relative">
                        <div
                            className={cn(
                                "h-full rounded-full transition-all duration-1000 ease-out",
                                remainingSlots === 0 ? "bg-red-600" : isLowCapacity ? "bg-gradient-to-r from-orange-500 to-red-500" : "bg-gradient-gold shadow-[0_0_8px_rgba(212,164,74,0.4)]"
                            )}
                            style={{ width: `${fillPercentage}%` }}
                        />
                    </div>
                </div>

                {/* Status Dot */}
                <div className="relative flex h-2 w-2 ml-1">
                    <span className={cn(
                        "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                        remainingSlots === 0 ? "bg-red-400" : isLowCapacity ? "bg-orange-400" : "bg-primary/50"
                    )}></span>
                    <span className={cn(
                        "relative inline-flex rounded-full h-2 w-2",
                        remainingSlots === 0 ? "bg-red-500" : isLowCapacity ? "bg-orange-500" : "bg-primary"
                    )}></span>
                </div>
            </div>
        </div>
    );
};

export default LiveCapacityHybrid;
