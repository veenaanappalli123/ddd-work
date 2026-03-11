import { ProductId, ProductName, PriceNumber, StockLevel, Quantity } from "./types"

export type Product = {
	id: ProductId
	name: ProductName
	price: PriceNumber
	stock: StockLevel
}

// Domain behavior
export function reduceStock(product: Product, quantity: Quantity): Product {
	const newStock = (product.stock - quantity) as StockLevel

	if (newStock < 0) {
		throw new Error("Stock cannot go below zero")
	}

	return {
		...product,
		stock: newStock,
	}
}
