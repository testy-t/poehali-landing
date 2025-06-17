"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { StarBorder } from "@/components/ui/star-border";
import { RainbowButton } from "@/components/ui/rainbow-button";

// Simple BlurFade component since it's not available
function BlurFade({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-orange-200/40",
  amount = "50 000 ₽",
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  amount?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-orange-200/30",
            "shadow-[0_8px_32px_0_rgba(251,176,64,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(251,176,64,0.1),transparent_70%)]",
          )}
        />

        {/* Money amount text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg md:text-xl font-bold text-orange-600/80 tracking-wide">
            {amount}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function HeroGeometric({
  badge = "Design Collective",
  title1 = "Elevate Your Digital Vision",
  title2 = "Crafting Exceptional Websites",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-orange-300/30"
          amount="50 000 ₽"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-yellow-300/30"
          amount="100 000 ₽"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-amber-300/30"
          amount="25 000 ₽"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-orange-400/30"
          amount="10 000 ₽"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-yellow-400/30"
          amount="75 000 ₽"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <BlurFade delay={0.2}>
          <motion.div
            className="inline-flex items-center px-3 md:px-4 py-1.5 md:py-2 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8"
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <Circle className="w-1.5 md:w-2 h-1.5 md:h-2 mr-2 fill-current" />
            Пассивный доход
          </motion.div>
        </BlurFade>

        <BlurFade delay={0.4}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-zinc-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {title1}
            </span>
          </h1>
        </BlurFade>

        <BlurFade delay={0.6}>
          <p className="md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto font-medium text-zinc-600 ">
            вместе с партнёрской программой{" "}
            <a
              href="https://poehali.dev"
              className="text-yellow-custom hover:text-yellow-custom/80 underline"
            >
              poehali.dev
            </a>{" "}
            🚀
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => {
                const element = document.querySelector("#terms");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className="group flex flex-col items-center gap-2 p-4 hover:bg-white/5 rounded-lg transition-all duration-300"
              style={{
                animation: "bounce 5s ease-in-out infinite",
              }}
            >
              <Icon
                name="ChevronDown"
                size={32}
                className="text-zinc-400 group-hover:text-zinc-600 transition-colors"
              />
              <span className="text-sm text-zinc-500 group-hover:text-zinc-700 transition-colors">
                Листай вниз
              </span>
            </button>
          </div>
        </BlurFade>

        <BlurFade delay={0.8}>
          <div className="flex justify-center mt-12">
            <RainbowButton className="mx-auto">
              Связаться в Телеграм
            </RainbowButton>
          </div>
        </BlurFade>
      </div>
    </div>
  );
}

export { HeroGeometric };
