import { Observer } from "./observer"

export const databaseObserver: Observer = (event) => {
	console.log(`Database log:`, event)
}
