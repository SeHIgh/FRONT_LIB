"use client";

import { usePathname } from "next/navigation";

export default function CurrentRoute() {
    const pathname = usePathname();

    return (
        <div className="p-4 bg-background">
            <p className="text-xl text-foreground">
                PATH: <span className="text-foreground">{pathname}</span>
            </p>
        </div>
    );
}
