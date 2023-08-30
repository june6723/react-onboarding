import { useContext } from "react";
import { QueryContext } from "../context/QueryContext";

export default function useQueryContext() {
  const args = useContext(QueryContext);

  if (!args) {
    throw new Error("QueryProvider doesn't exists!");
  }
  return args;
}
