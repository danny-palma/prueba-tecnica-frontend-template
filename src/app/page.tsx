"use client";

import React from 'react';
import { useProductData } from '../hooks/useProductData';
import LoadingSpinner from '../components/LoadingSpinner';
import DashboardHeader from '../components/DashboardHeader';
import SearchBar from '../components/SearchBar';
import SortButton from '../components/SortButton';
import StatsCard from '../components/StatsCard';
import ProductGrid from '../components/ProductGrid';

const Dashboard = () => {
  const {
    loading,
    filter,
    setFilter,
    sort,
    setSort,
    stats,
    products
  } = useProductData();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl p-8">
          <DashboardHeader title="Dashboard de Ventas (Optimizado)" />

          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <SearchBar
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />

            <SortButton
              sortOrder={sort}
              onToggle={() => setSort(sort === 'asc' ? 'desc' : 'asc')}
            />
          </div>

          <StatsCard stats={stats} />

          <ProductGrid products={products} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;