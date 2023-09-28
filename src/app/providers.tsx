"use client";

import { useContext, useRef } from "react";
import type { PropsWithChildren } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function FrozenRouter(props: PropsWithChildren) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

export function Providers({ children }: PropsWithChildren) {
  const path = usePathname();

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={path}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -50,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="grid h-screen w-full overflow-y-auto"
          >
            <FrozenRouter>{children}</FrozenRouter>
          </motion.main>
        </AnimatePresence>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
