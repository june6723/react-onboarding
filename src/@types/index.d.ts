export {};

declare global {
  type ProductCategory = "COFFEE" | "DESSERT";
  type Product = { id: number; category: ProductCategory; name: string; price: number; imgUrl: string };
  type SelectedProduct = Product & { quantity: number };

  type MenuItem = { url: string; name: string };
}
