import { useState, useMemo, useTransition } from 'react';
import { Product, Stats } from '../types';

const expensiveCalculation = (data: Product[]) => {
    console.log("Calculando estadísticas pesadas...");
    let sum = 0;
    // Reduced iterations for performance, but kept the logic structure
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 1000; j++) {
            sum += Math.random();
        }
    }
    return data.map(item => ({ ...item, complexScore: sum }));
};

export const useProductData = (initialData: Product[]) => {
    const [data] = useState<Product[]>(initialData);
    const [isPending, startTransition] = useTransition();
    const [filter, setFilter] = useState(""); // This will be the deferred filter
    const [inputValue, setInputValue] = useState(""); // This will be the immediate input value
    const [sort, setSort] = useState<'asc' | 'desc'>("asc");

    const handleFilterChange = (value: string) => {
        setInputValue(value); // Update UI immediately
        startTransition(() => {
            setFilter(value); // Defer the heavy filtering logic
        });
    };

    const filteredAndSortedData = useMemo(() => {
        const lowerFilter = filter.toLowerCase();

        let result = data.filter((item) => {
            return item.name.toLowerCase().includes(lowerFilter) ||
                item.description.toLowerCase().includes(lowerFilter) ||
                item.category.toLowerCase().includes(lowerFilter);
        });

        if (sort === 'asc') {
            result = [...result].sort((a, b) => a.price - b.price);
        } else {
            result = [...result].sort((a, b) => b.price - a.price);
        }

        return expensiveCalculation(result);
    }, [data, filter, sort]);

    const stats: Stats = useMemo(() => {
        const totalValue = filteredAndSortedData.reduce((acc, curr) => acc + curr.price, 0);
        return {
            totalItems: filteredAndSortedData.length,
            totalValue
        };
    }, [filteredAndSortedData]);

    return {
        isPending,
        filter: inputValue, // Return inputValue as 'filter' for the UI to bind to
        setFilter: handleFilterChange,
        sort,
        setSort,
        stats,
        products: filteredAndSortedData
    };
};
