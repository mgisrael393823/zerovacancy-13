
"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Building, UserPlus } from "lucide-react";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import AuroraBackground from "@/components/ui/aurora-background";
import { useIsMobile } from "@/hooks/use-mobile";

export function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const isMobile = useIsMobile();
  const titles = useMemo(() => ["engages", "converts", "impresses", "stands out", "educates"], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles.length]);

  return (
    <div className="w-full">
      <AuroraBackground className="w-full bg-gradient-to-b from-purple-50/50 via-white to-blue-50/50">
        <div className="flex gap-8 sm:gap-10 lg:gap-12 items-center justify-center flex-col px-4 sm:px-6 py-12 sm:py-16 lg:py-20 min-h-[calc(100vh-4.5rem)] sm:min-h-0">
          <div className="flex gap-4 sm:gap-6 flex-col max-w-5xl mx-auto w-full">
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl tracking-tight leading-[1.1] sm:leading-[1.1] text-center py-4 sm:py-6 my-4 sm:my-6 font-bold lg:text-8xl">
              <span className="text-primary inline whitespace-normal sm:whitespace-nowrap tracking-tight font-light bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                Property Content that
              </span>
              <span className="relative flex w-full justify-center h-[1.2em] overflow-hidden mt-2 sm:mt-3">
                {titles.map((title, index) => (
                  <motion.span 
                    key={index}
                    className="absolute font-playfair tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
                    initial={{
                      opacity: 0,
                      y: isMobile ? 25 : 50
                    }}
                    animate={titleNumber === index ? {
                      y: 0,
                      opacity: 1
                    } : {
                      y: titleNumber > index ? (isMobile ? -25 : -50) : (isMobile ? 25 : 50),
                      opacity: 0
                    }}
                    transition={{
                      type: "spring",
                      stiffness: isMobile ? 120 : 100,
                      damping: isMobile ? 18 : 15
                    }}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl leading-relaxed tracking-wide text-muted-foreground max-w-2xl text-center mx-auto px-2 sm:px-4 [word-spacing:0.12em] sm:[word-spacing:0.16em]">
              Connect with top-tier creators for photography, videography, and marketing content that elevates your
              property portfolio.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full px-4 sm:px-6 max-w-2xl mx-auto mt-6 sm:mt-8">
            <ShimmerButton 
              className="flex-1 text-sm sm:text-base font-medium gap-2 items-center justify-center sm:gap-3 min-h-[3rem] sm:min-h-[3.5rem] touch-manipulation tracking-wide [word-spacing:0.16em] active:scale-[0.98] transition-transform" 
              background="rgba(255, 255, 255, 0.1)"
            >
              Find Creators <Building className="w-4 h-4 sm:w-5 sm:h-5" />
            </ShimmerButton>
            <ShimmerButton 
              className="flex-1 text-sm sm:text-base font-medium gap-2 items-center justify-center sm:gap-3 min-h-[3rem] sm:min-h-[3.5rem] touch-manipulation tracking-wide [word-spacing:0.16em] active:scale-[0.98] transition-transform"
            >
              Join as Creator <UserPlus className="w-4 h-4 sm:w-5 sm:h-5" />
            </ShimmerButton>
          </div>
        </div>
      </AuroraBackground>
    </div>
  );
}

export default Hero;
