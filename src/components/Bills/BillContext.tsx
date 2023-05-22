import { PropsWithChildren, Reducer, createContext, useReducer } from "react";
import { produce } from "immer";

type BillState = {
  products: SelectedProduct[];
};

type AddProduct = { type: "add_product"; product: Product };
type RemoveProduct = { type: "remove_product"; id: Product["id"] };
type Reset = { type: "reset" };

type BillAction = AddProduct | RemoveProduct | Reset;

const billReducer: Reducer<BillState, BillAction> = produce((draft, action) => {
  let targetIndex = -1;
  switch (action.type) {
    case "add_product":
      targetIndex = draft.products.findIndex((product) => product.id === action.product.id);
      targetIndex >= 0 ? draft.products[targetIndex].quantity++ : draft.products.push({ ...action.product, quantity: 1 });
      break;
    case "remove_product":
      draft.products = draft.products.filter((product) => product.id !== action.id);
      break;
    case "reset":
      draft.products = [];
      break;
  }
});

export const BillContext = createContext<[BillState, React.Dispatch<BillAction>] | null>(null);

export const BillContextProvider = ({ children }: PropsWithChildren) => {
  const stateAndDispatch = useReducer(billReducer, { products: [] });
  return <BillContext.Provider value={stateAndDispatch}>{children}</BillContext.Provider>;
};
