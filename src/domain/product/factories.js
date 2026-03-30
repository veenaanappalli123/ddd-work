import { v4 as uuidv4 } from "uuid";
// Create a price with validation
export function createPrice(value) {
    if (value < 0) {
        throw new Error("Price must be positive");
    }
    return value;
}
// Create a quantity with validation
export function createQuantity(value) {
    if (value <= 0) {
        throw new Error("Quantity must be greater than zero");
    }
    return value;
}
// Create a stock level with validation
export function createStockLevel(value) {
    if (value < 0) {
        throw new Error("Stock level cannot be negative");
    }
    return value;
}
export function createProduct(name, price, initialStock) {
    return {
        id: uuidv4(),
        name,
        price: createPrice(price),
        stock: createStockLevel(initialStock),
    };
}
