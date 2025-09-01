export const getProductsItems = async () => {
    const res = await fetch(
        'https://fakestoreapi.com/products/'
    );
    if (!res.ok) throw new Error ('failed');
    const data = await res.json();
    return data;
}
export const getCategories = async () => {
    const res = await fetch(
        'https://fakestoreapi.com/products/categories'
    );
    if (!res.ok) throw new Error ('failed');
    const data = await res.json();
    return data;
}
export const getProductsByCategory = async (category: string) => {
    const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
    );
    if (!res.ok) throw new Error ('failed');
    const data = await res.json();
    return data;
}