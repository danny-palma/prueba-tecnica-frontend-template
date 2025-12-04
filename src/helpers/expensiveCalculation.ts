import { ProductItem } from '@/types'

export const expensiveCalculation = (data: ProductItem[]) => {
	console.log('Calculando estadísticas pesadas...')
	let sum = 0
	for (let i = 0; i < data.length; i++) {
		for (let j = 0; j < 10000; j++) {
			sum += Math.random()
		}
	}

	return data.map((item) => ({ ...item, complexScore: sum }))
}
