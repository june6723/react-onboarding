export const filterProductsByCategory = <T extends Product>(category: ProductCategory, products: T[]) =>
  products.filter((product) => product.category === category);

export const getTotalPrice = (products: SelectedProduct[]) => products.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
