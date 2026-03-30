import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("DDD Observer App Running ")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


import { v4 as uuidv4 } from "uuid"

import { createPrice, createQuantity, createStockLevel } from "./src/domain/product/factories.ts"
import { Product } from "./src/domain/product/product.ts"
import { notify, subscribe } from "./src/infrastructure/observers/observer.ts"
import { emailObserver } from "./src/infrastructure/observers/emailobserver.ts"
import { databaseObserver } from "./src/infrastructure/observers/databaseobserver.ts"

// Subscribe observers
subscribe(emailObserver)
subscribe(databaseObserver)

try {
	// Create a product
	const product: Product = {
		id: uuidv4() as any,
		name: "Shoes",
		price: createPrice(100),
		stock: createStockLevel(10),
	}

	console.log("Product created:", product)

	// Reduce stock
	const quantity = createQuantity(3)
	const newStock = createStockLevel(product.stock - quantity)

	const updatedProduct: Product = {
		...product,
		stock: newStock,
	}

	console.log("Stock updated:", updatedProduct)

	// Emit domain event
	notify({
		type: "StockReduced",
		productId: updatedProduct.id,
		quantity,
		newLevel: updatedProduct.stock,
	})

} catch (error) {
	if (error instanceof Error) {
		console.error("Error:", error.message)
	} else {
		console.error("Unknown error")
	}
}

