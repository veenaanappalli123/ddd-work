// Domain behavior
export function reduceStock(product, quantity) {
    const newStock = (product.stock - quantity);
    if (newStock < 0) {
        throw new Error("Stock cannot go below zero");
    }
    return {
        ...product,
        stock: newStock,
    };
}
