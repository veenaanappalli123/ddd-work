import { Product } from "./product"
import { ProductId, ProductName, PriceNumber, Quantity, StockLevel } from "./types"
import { v4 as uuidv4 } from "uuid"

// Create a price with validation
export function createPrice(value: number): PriceNumber {
	if (value < 0) {
		throw new Error("Price must be positive")
	}

	return value as PriceNumber
}

// Create a quantity with validation
export function createQuantity(value: number): Quantity {
	if (value <= 0) {
		throw new Error("Quantity must be greater than zero")
	}

	return value as Quantity
}

// Create a stock level with validation
export function createStockLevel(value: number): StockLevel {
	if (value < 0) {
		throw new Error("Stock level cannot be negative")
	}

	return value as StockLevel
}

import { Product } from "./product"
import { ProductId, ProductName } from "./types"
import { v4 as uuidv4 } from "uuid"

export function createProduct(
	name: ProductName,
	price: number,
	initialStock: number
): Product {

	return {
		id: uuidv4() as ProductId,
		name,
		price: createPrice(price),
		stock: createStockLevel(initialStock),
	}
}
