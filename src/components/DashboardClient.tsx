"use client";

import React from 'react';
import { useProductData } from '../hooks/useProductData';
import DashboardHeader from './DashboardHeader';
import SearchBar from './SearchBar';
import SortButton from './SortButton';
import StatsCard from './StatsCard';
import ProductGrid from './ProductGrid';
import { Product } from '../types';

interface DashboardClientProps {
    initialProducts: Product[];
}

const DashboardClient: React.FC<DashboardClientProps> = ({ initialProducts }) => {
    const {
        isPending,
        filter,
        setFilter,
        sort,
        setSort,
        stats,
        products
    } = useProductData(initialProducts);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl p-8">
                    <DashboardHeader title="Dashboard de Ventas (Server Components + useTransition)" />

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

                    {isPending && (
                        <div className="mb-4 text-sm text-blue-600 animate-pulse">
                            Actualizando resultados...
                        </div>
                    )}

                    <StatsCard stats={stats} />

                    <div className={isPending ? 'opacity-50 transition-opacity' : 'transition-opacity'}>
                        <ProductGrid products={products} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardClient;
