export const getProductsItems = async () => {
    const res = await fetch(
        'https://fakestoreapi.com/products/'
    );
    if (!res.ok) throw new Error ('failed');
    const data = await res.json();
    console.log(data)
    return data;
}