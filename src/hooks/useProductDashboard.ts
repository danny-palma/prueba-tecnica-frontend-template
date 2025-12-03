import { useState, useEffect, useCallback } from "react";
import { Product, Stats } from "@/types";

type UseProductDashboardProps = {
  initialItems: Product[];
  initialStats: Stats;
  pageSize: number;
};

export const useProductDashboard = ({ initialItems, initialStats, pageSize }: UseProductDashboardProps) => {
  const [items, setItems] = useState<Product[]>(initialItems);
  const [stats, setStats] = useState<Stats>(initialStats);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [page, setPage] = useState(1);

  const fetchPage = useCallback(async () => {
    setLoading(true);
    try {
      const q = new URLSearchParams({
        filter,
        sort,
        page: String(page),
        pageSize: String(pageSize),
      });

      const res = await fetch(`/api/products?${q.toString()}`);
      if (!res.ok) throw new Error("Error fetching products");
      const body = await res.json();

      setItems(body.items);
      setStats({ totalItems: body.totalItems, totalValue: body.totalValue });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [filter, sort, page, pageSize]);

  useEffect(() => {
    const t = setTimeout(() => fetchPage(), 300);
    return () => clearTimeout(t);
  }, [fetchPage]);

  const handleFilterChange = (val: string) => {
    setPage(1);
    setFilter(val);
  };

  const toggleSort = () => {
    setSort((s) => (s === "asc" ? "desc" : "asc"));
    setPage(1);
  };

  const totalPages = Math.max(1, Math.ceil(stats.totalItems / pageSize));

  return {
    items,
    stats,
    loading,
    filter,
    sort,
    page,
    totalPages,
    setPage,
    handleFilterChange,
    toggleSort,
  };
};