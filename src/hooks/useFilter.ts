import { ProductItem } from '@/types'

export const useFilter = (
	data: ProductItem[],
	sort: string,
	filter: string
) => {
	let result = data.filter((item: ProductItem) => {
		return item.searchText.includes(filter)
	})

	if (sort === 'asc') {
		result = result.sort((a, b) => a.price - b.price)
	} else {
		result = result.sort((a, b) => b.price - a.price)
	}
	return result
}
