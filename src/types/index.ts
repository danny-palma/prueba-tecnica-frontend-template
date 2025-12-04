// Tipos básicos para la aplicación

export interface User {
	id: string
	name: string
	email: string
	avatar?: string
	createdAt: Date
	updatedAt: Date
}

export interface ApiResponse<T = unknown> {
	success: boolean
	data?: T
	error?: string
	message?: string
}

export interface PaginationParams {
	page: number
	limit: number
	sortBy?: string
	sortOrder?: 'asc' | 'desc'
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
	pagination: {
		page: number
		limit: number
		total: number
		totalPages: number
	}
}

// Tipos para componentes comunes
export interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'danger' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	disabled?: boolean
	loading?: boolean
	onClick?: () => void
	children: React.ReactNode
	className?: string
}

export interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: React.ReactNode
	size?: 'sm' | 'md' | 'lg' | 'xl'
}

// Tipos especificos de la app
export interface FilterProps {
	filter: string
	handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	sort: string
	setSort: (value: string) => void
}

export interface StatsProps {
	totalValue: number
	totalItems: number
}

// Tipo para un solo producto
export interface ProductItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  stock: number
	createdAt: string
	searchText: string
}

// Props del componente FilteredData (paginado)
export interface FilteredDataProps {
  filteredData: ProductItem[]
  currentPage: number
  itemsPerPage: number
  onLoadMore: () => void
  hasMore: boolean
}
