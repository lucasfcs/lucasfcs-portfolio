"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { BUGS, type BugId } from "@/lib/bugs";

type BugHuntContextValue = {
  huntMode: boolean;
  setHuntMode: (on: boolean) => void;
  found: Set<BugId>;
  markFound: (id: BugId) => void;
  total: number;
  progress: number;
  toast: string | null;
};

const STORAGE_KEY = "lucasfcs-bug-hunt";

const BugHuntContext = createContext<BugHuntContextValue | null>(null);

export function BugHuntProvider({ children }: { children: React.ReactNode }) {
  const [huntMode, setHuntMode] = useState(false);
  const [found, setFound] = useState<Set<BugId>>(new Set());
  const [toast, setToast] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const ids = JSON.parse(raw) as BugId[];
        setFound(new Set(ids));
      }
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...found]));
  }, [found, hydrated]);

  const markFound = useCallback((id: BugId) => {
    setFound((prev) => {
      if (prev.has(id)) return prev;
      const next = new Set(prev);
      next.add(id);
      const bug = BUGS.find((b) => b.id === id);
      setToast(bug ? `Bug encontrado: ${bug.page}` : "Bug encontrado!");
      setTimeout(() => setToast(null), 3200);
      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      huntMode,
      setHuntMode,
      found,
      markFound,
      total: BUGS.length,
      progress: found.size,
      toast,
    }),
    [huntMode, found, markFound, toast],
  );

  return (
    <BugHuntContext.Provider value={value}>{children}</BugHuntContext.Provider>
  );
}

export function useBugHunt() {
  const ctx = useContext(BugHuntContext);
  if (!ctx) throw new Error("useBugHunt must be used within BugHuntProvider");
  return ctx;
}
