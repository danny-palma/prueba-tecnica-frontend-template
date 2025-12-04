// TODO: El candidato debe refactorizar este archivo.
// Es un Server Component por defecto en Next.js (app dir), pero está escrito como si fuera React viejo.
// Contiene: Bad Performance, Any types, Fetching waterfall, Logic coupling.

'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { getInitialData } from '../lib/mockData'
import { Loading } from '@/components/Loading'
import { Header } from '@/components/Header'
import { Filter } from '@/components/Filter'
import { Stats } from '@/components/Stats'
import { FilteredData } from '@/components/FilteredData'
import { ProductItem, StatsProps } from '@/types'
import { expensiveCalculation } from '@/helpers/expensiveCalculation'
import { useFilter } from '@/hooks/useFilter'

const LegacyDashboard = () => {
	const [data, setData] = useState<ProductItem[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [filter, setFilter] = useState<string>('')
	const [sort, setSort] = useState<string>('asc')
	const [currentPage, setCurrentPage] = useState<number>(1)
	const itemsPerPage = 12

	// Fetching de datos simulado
	useEffect(() => {
		setData(() => getInitialData(5000))
		setLoading(false)
	}, [])

	// Resetear paginación al filtrar o cambiar ordenamiento
	useEffect(() => {
		setCurrentPage(1)
	}, [filter, sort])

  const result = useMemo(() => useFilter(data, sort, filter.toLowerCase()), [filter, sort, data])
	// const result =useMemo(() => useFilter(data, sort, filter.toLowerCase()), [filter, sort, data])

	const processed = useMemo(() => expensiveCalculation(result), [result])

  const totalItems = result.length
  const totalValue = useMemo(() => processed.reduce((acc, curr) => acc + curr.price, 0), [processed])

	const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value)
	}

	const handleLoadMore = () => {
		setCurrentPage((prev) => prev + 1)
	}

	const totalPages = Math.ceil(totalItems / itemsPerPage)
	const hasMore = currentPage < totalPages

	// Renderiza el loading mientras carga
	if (loading) return <Loading />

	return (
		<div className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-6'>
			<div className='max-w-7xl mx-auto'>
				<div className='bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl p-8'>
					<Header />

					<Filter
						filter={filter}
						handleFilterChange={handleFilterChange}
						sort={sort}
						setSort={setSort}
					/>

					<Stats
						totalItems={totalItems}
						totalValue={totalValue}
					/>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<FilteredData 
						filteredData={processed} 
						currentPage={currentPage}
						itemsPerPage={itemsPerPage}
						onLoadMore={handleLoadMore}
						hasMore={hasMore}
					/>
				</div>
				</div>
			</div>
		</div>
	)
}
export default LegacyDashboard
