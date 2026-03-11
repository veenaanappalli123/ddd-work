import { ProductId, PriceNumber, Quantity, StockLevel, ProductName } from "../product/types"

// Event when a product is created
export type ProductCreatedEvent = {
	readonly type: "ProductCreated"
	readonly productId: ProductId
	readonly name: ProductName
	readonly price: PriceNumber
}

// Event when stock is reduced
export type StockReducedEvent = {
	readonly type: "StockReduced"
	readonly productId: ProductId
	readonly quantity: Quantity
	readonly newLevel: StockLevel
}

// All possible domain events
export type DomainEvent = ProductCreatedEvent | StockReducedEvent
