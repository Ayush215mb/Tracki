import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import type { CalendarDayStat } from "../../../lib/types";

type UseCalendarStatsResult = {
  stats: CalendarDayStat[];
  loading: boolean;
  error: string | null;
  refresh: () => Promise<void>;
};

export function useCalendarStats(): UseCalendarStatsResult {
  const [stats, setStats] = useState<CalendarDayStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    try {
      setError(null);
      const data = await api.getCalendarStats();
      setStats(data);
    } catch (e) {
      setError(
        e instanceof Error ? e.message : "Failed to load calendar summary"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const refresh = async () => {
    setLoading(true);
    await load();
  };

  return { stats, loading, error, refresh };
}
