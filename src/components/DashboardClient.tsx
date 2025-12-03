"use client";
import { PropsDashboardClient} from "@/types";
import { useProductDashboard } from "@/hooks/useProductDashboard";
import StatsProducts from "./StatsProducts";
import ProductCard from "./ProductCard";


const DashboardClient = (props: PropsDashboardClient) => {
  const {
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
  } = useProductDashboard(props);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Buscar productos..."
            value={filter}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:text-white transition-all"
          />
        </div>
        <button
          onClick={toggleSort}
          className="px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-all font-medium"
        >
          Ordenar por Precio ({sort === "asc" ? "↑" : "↓"})
        </button>
      </div>

      <StatsProducts stats={stats} />

      {loading && (
        <div className="min-h-40 flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Cargando ...</p>
          </div>
        </div>
      )}

      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}

      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          Página {page} de {totalPages}
        </div>
        <div className="flex gap-2">
          <button
            disabled={page <= 1 || loading}
            onClick={() => setPage(p => Math.max(1, p - 1))}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border shadow-sm disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            disabled={page >= totalPages || loading}
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border shadow-sm disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardClient;