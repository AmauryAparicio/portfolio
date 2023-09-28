"use client";

import { forwardRef, useContext, useRef } from "react";
import type { ForwardedRef, PropsWithChildren } from "react";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname } from "next/navigation";
import { NextUIProvider } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider as NextThemesProvider } from "next-themes";

function FrozenRouter(
  props: PropsWithChildren,
  ref: ForwardedRef<HTMLElement>,
) {
  const context = useContext(LayoutRouterContext);
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      <motion.main
        layout
        ref={ref}
        initial={{
          opacity: 0,
          x: 50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          x: -50,
          transition: {
            duration: 0.3,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className="grid h-screen w-full overflow-y-auto"
      >
        {props.children}
      </motion.main>
    </LayoutRouterContext.Provider>
  );
}

const Main = forwardRef(FrozenRouter);

export function Providers({ children }: PropsWithChildren) {
  const path = usePathname();

  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="system">
        <div className="h-screen overflow-hidden bg-[url(/background-light.png)] bg-cover bg-left-top bg-no-repeat backdrop-blur-sm dark:bg-[url(/background.png)]">
          <div className="h-screen overflow-hidden bg-white bg-opacity-10 backdrop-blur-[0px] dark:bg-black dark:bg-opacity-10">
            <AnimatePresence mode="popLayout">
              <Main key={path}>{children}</Main>
            </AnimatePresence>
          </div>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
