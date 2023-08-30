import { produce } from "immer";
import { PropsWithChildren, Reducer, createContext, useReducer } from "react";

type QueryState = Map<string, Promise<unknown>>;

type SetQuery = { type: "add_query"; url: string; query: Promise<unknown> };

type QueryAction = SetQuery;

const queryReducer: Reducer<QueryState, QueryAction> = produce((draft, action) => {
  switch (action.type) {
    case "add_query":
      draft.set(action.url, action.query);
      break;
  }
});

export const QueryContext = createContext<[QueryState, React.Dispatch<QueryAction>] | null>(null);

export const QueryContextProvider = ({ children }: PropsWithChildren) => {
  const queryMap = new Map<string, Promise<unknown>>();
  const stateAndDispatch = useReducer(queryReducer, queryMap);

  return <QueryContext.Provider value={stateAndDispatch}>{children}</QueryContext.Provider>;
};
