import { Observer } from "./observer"

export const emailObserver: Observer = (event) => {
	if (event.type === "StockReduced" && event.newLevel === 0) {
		console.log(`Email: Product ${event.productId} is now out of stock`)
	}
}
