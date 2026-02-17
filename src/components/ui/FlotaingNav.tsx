/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { JSX, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const { theme, resolvedTheme, setTheme } = useTheme();

  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [activeLink, setActiveLink] = useState(navItems[0]?.link || "#about");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeIndex = Math.max(
    navItems.findIndex((item) => item.link === activeLink),
    0
  );
  const activeItem = navItems[activeIndex];
  const currentTheme = resolvedTheme || theme;
  const isDark = mounted ? currentTheme !== "light" : true;

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => ({
        link: item.link,
        id: item.link.startsWith("#") ? item.link.slice(1) : "",
      }))
      .filter((section) => section.id);

    if (!sections.length) return;

    const sectionElements = sections
      .map((section) => ({
        ...section,
        element: document.getElementById(section.id),
      }))
      .filter(
        (
          section
        ): section is {
          link: string;
          id: string;
          element: HTMLElement;
        } => Boolean(section.element)
      );

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio ||
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (!visibleEntries.length) return;

        const nextSection = sectionElements.find(
          (section) => section.element.id === visibleEntries[0]?.target.id
        );

        if (nextSection) {
          setActiveLink((prev) =>
            prev === nextSection.link ? prev : nextSection.link
          );
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    sectionElements.forEach((section) => observer.observe(section.element));

    return () => observer.disconnect();
  }, [navItems]);

  useEffect(() => {
    if (visible || isDesktop) {
      setMobileDrawerOpen(false);
    }
  }, [visible, isDesktop]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <>
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          y: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
        className="fixed z-[5000] top-4 md:top-8 inset-x-0 flex justify-center px-3 md:px-4"
      >
        <div
          className={cn(
            "flex w-full max-w-3xl items-center justify-center gap-1.5 rounded-2xl border border-black/.1 px-2 py-2.5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] md:w-fit md:max-w-full md:gap-4 md:px-8 md:py-4",
            className
          )}
          style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: isDark
              ? "rgba(17, 25, 40, 0.75)"
              : "rgba(241, 245, 252, 0.9)",
            border: isDark
              ? "1px solid rgba(255, 255, 255, 0.125)"
              : "1px solid rgba(51, 65, 85, 0.2)",
          }}
        >
          <div
            className={cn(
              "hidden lg:flex items-center gap-2 rounded-full px-3 py-2 mr-2",
              isDark
                ? "border border-cyan-300/30 bg-cyan-500/10"
                : "border border-indigo-500/30 bg-indigo-500/10"
            )}
          >
            <span className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-300 to-blue-400 text-black text-xs font-bold flex items-center justify-center">
              CY
            </span>
            <span
              className={cn(
                "text-sm font-semibold whitespace-nowrap",
                isDark ? "text-neutral-100" : "text-slate-800"
              )}
            >
              Christian Yuda Pratama
            </span>
          </div>

          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={navItem.link || `nav-item-${idx}`}
              href={navItem.link}
              className={cn(
                "relative rounded-full px-2 py-1.5 md:px-3 md:py-2 items-center transition duration-200",
                activeLink === navItem.link
                  ? isDark
                    ? "text-cyan-200"
                    : "text-indigo-700"
                  : isDark
                    ? "text-neutral-200/90 hover:text-cyan-200"
                    : "text-slate-700 hover:text-indigo-700"
              )}
            >
              {activeLink === navItem.link && (
                <motion.span
                  layoutId="top-nav-active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className={cn(
                    "absolute inset-0 rounded-full",
                    isDark
                      ? "border border-cyan-300/40 bg-cyan-400/15"
                      : "border border-indigo-500/40 bg-indigo-500/15"
                  )}
                />
              )}
              <span className="relative z-10 text-xs md:text-sm !cursor-pointer whitespace-nowrap">
                {navItem.name}
              </span>
            </Link>
          ))}

        </div>
      </motion.div>

      <AnimatePresence>
        {!visible && isDesktop && (
          <motion.aside
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -16 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed left-4 top-1/2 -translate-y-1/2 z-[5000] rounded-3xl backdrop-blur-xl px-3 py-4",
              isDark
                ? "border border-white/15 bg-slate-900/85 shadow-[0_14px_45px_-22px_rgba(20,184,166,0.4)]"
                : "border border-slate-300/90 bg-slate-50/90 shadow-[0_14px_45px_-22px_rgba(15,23,42,0.18)]"
            )}
          >
            <p
              className={cn(
                "px-2 pb-3 text-[10px] font-semibold tracking-[0.2em] uppercase",
                isDark ? "text-slate-400" : "text-slate-500"
              )}
            >
              Sections
            </p>
            <div className="relative flex flex-col gap-1">
              <span
                className={cn(
                  "pointer-events-none absolute left-[18px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent to-transparent",
                  isDark ? "via-slate-600/80" : "via-slate-300"
                )}
              />
              {navItems.map((item, idx) => {
                const active = item.link === activeLink;
                return (
                  <Link
                    key={item.link || `drawer-link-${idx}`}
                    href={item.link}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileDrawerOpen(false)}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-xl px-2 py-2.5 transition",
                      active
                        ? isDark
                          ? "text-cyan-100"
                          : "text-indigo-800"
                        : isDark
                          ? "text-slate-300 hover:bg-white/5"
                          : "text-slate-700 hover:bg-slate-200/60"
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="desktop-drawer-active"
                        transition={{
                          type: "spring",
                          stiffness: 360,
                          damping: 28,
                        }}
                        className={cn(
                          "absolute inset-0 rounded-xl",
                          isDark ? "bg-cyan-500/20" : "bg-indigo-500/12"
                        )}
                      />
                    )}
                    <span
                      className={cn(
                        "relative z-10 flex h-4 w-4 items-center justify-center rounded-full border text-[9px] font-semibold transition-colors",
                        active
                          ? "border-cyan-200 bg-cyan-300 text-slate-950"
                          : isDark
                            ? "border-slate-500 bg-slate-700/90 text-slate-300"
                            : "border-slate-400 bg-slate-200 text-slate-700"
                      )}
                    >
                      {idx + 1}
                    </span>
                    <span
                      className={cn(
                        "relative z-10 text-sm whitespace-nowrap",
                        active
                          ? isDark
                            ? "text-cyan-100"
                            : "text-indigo-800"
                          : isDark
                            ? "text-slate-300"
                            : "text-slate-700"
                      )}
                    >
                      {item.name}
                    </span>
                    {active && (
                      <span
                        className={cn(
                          "relative z-10 ml-auto rounded-full px-2 py-0.5 text-[10px] font-medium",
                          isDark
                            ? "bg-cyan-300/20 text-cyan-100"
                            : "bg-indigo-100 text-indigo-700"
                        )}
                      >
                        On
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 px-2">
              <p
                className={cn(
                  "text-[10px]",
                  isDark ? "text-slate-400" : "text-slate-500"
                )}
              >
                {activeIndex + 1} / {navItems.length}
              </p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!visible && !isDesktop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-4 z-[5000] px-4"
          >
            <div className="mx-auto w-full max-w-xs">
              <AnimatePresence>
                {mobileDrawerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className={cn(
                      "mb-2 rounded-2xl p-2 backdrop-blur-xl",
                      isDark
                        ? "border border-white/15 bg-slate-900/90"
                        : "border border-slate-300 bg-slate-50/95"
                    )}
                  >
                    <p
                      className={cn(
                        "px-2 pb-2 text-[10px] font-semibold tracking-[0.2em] uppercase",
                        isDark ? "text-slate-400" : "text-slate-500"
                      )}
                    >
                      Jump To
                    </p>
                    <div className="grid gap-1">
                      {navItems.map((item, idx) => {
                        const active = item.link === activeLink;
                        return (
                          <Link
                            key={item.link || `mobile-drawer-link-${idx}`}
                            href={item.link}
                            aria-current={active ? "page" : undefined}
                            onClick={() => setMobileDrawerOpen(false)}
                            className={cn(
                              "flex items-center gap-2 rounded-lg px-2 py-2 text-sm transition",
                              active
                                ? isDark
                                  ? "bg-cyan-500/20 text-cyan-100"
                                  : "bg-indigo-100 text-indigo-800"
                                : isDark
                                  ? "text-slate-300 hover:bg-white/5"
                                  : "text-slate-700 hover:bg-slate-200/60"
                            )}
                          >
                            <span
                              className={cn(
                                "flex h-5 w-5 items-center justify-center rounded-full border text-[10px] font-semibold",
                                active
                                  ? "border-cyan-200 bg-cyan-300 text-slate-950"
                                  : isDark
                                    ? "border-slate-500 bg-slate-700/90 text-slate-300"
                                    : "border-slate-400 bg-slate-200 text-slate-700"
                              )}
                            >
                              {idx + 1}
                            </span>
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="button"
                onClick={() => setMobileDrawerOpen((prev) => !prev)}
                className={cn(
                  "flex w-full items-center justify-between rounded-2xl px-3 py-2.5 text-left backdrop-blur-xl",
                  isDark
                    ? "border border-white/15 bg-slate-900/85"
                    : "border border-slate-300 bg-slate-50/95"
                )}
                aria-expanded={mobileDrawerOpen}
                aria-label="Toggle section navigation"
              >
                <span className="flex items-center gap-2">
                  <span
                    className={cn(
                      "rounded-full px-2 py-1 text-[11px] font-semibold",
                      isDark
                        ? "bg-cyan-400/20 text-cyan-100"
                        : "bg-indigo-100 text-indigo-800"
                    )}
                  >
                    {activeIndex + 1}/{navItems.length}
                  </span>
                  <span
                    className={cn(
                      "text-sm font-medium",
                      isDark ? "text-slate-100" : "text-slate-800"
                    )}
                  >
                    {activeItem?.name || "Sections"}
                  </span>
                </span>
                <motion.span
                  animate={{ rotate: mobileDrawerOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className={cn(isDark ? "text-cyan-200" : "text-indigo-700")}
                >
                  ^
                </motion.span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.15 }}
        className={cn(
          "fixed z-[5000] right-4 bottom-4 md:right-6 md:bottom-6 h-11 w-11 rounded-full border backdrop-blur-xl flex items-center justify-center transition",
          isDark
            ? "border-white/20 bg-slate-900/85 text-cyan-200 hover:bg-slate-800"
            : "border-slate-300 bg-slate-50/95 text-indigo-700 hover:bg-slate-100"
        )}
      >
        {isDark ? <FaSun size={15} /> : <FaMoon size={15} />}
      </motion.button>
    </>
  );
};
