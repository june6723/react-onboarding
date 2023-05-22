import { useContext } from "react";
import { BillContext } from "./BillContext";

export default function useBill() {
  const args = useContext(BillContext);

  if (!args) {
    throw new Error("BillProvider doesn't exists!");
  }
  return args;
}
