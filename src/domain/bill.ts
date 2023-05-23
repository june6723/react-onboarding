import { freeShippingPrice } from "../constants/price";
import { getTotalPrice } from "./product";

export const isFreeShipping = (productsOrTotal: SelectedProduct[] | number) => {
  const total = typeof productsOrTotal === "number" ? productsOrTotal : getTotalPrice(productsOrTotal);
  return total >= freeShippingPrice;
};
