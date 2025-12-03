import { Product } from "@/types";

const generateMockData = (count: number): Product[] => {
  const categories = ['Electronics', 'Clothing', 'Home', 'Toys', 'Books'];
  const data: Product[] = [];

  for (let i = 0; i < count; i++) {
    data.push({
      id: `prod_${i}`,
      name: `Producto ${i} - ${Math.random().toString(36).substring(7)}`,
      description: `Esta es una descripción larga para el producto número ${i}`,
      price: Math.floor(Math.random() * 1000) + 10,
      category: categories[Math.floor(Math.random() * categories.length)],
      stock: Math.floor(Math.random() * 100),
      createdAt: new Date().toISOString(),
    });
  }
  return data;
};

export const initialData = generateMockData(5000);