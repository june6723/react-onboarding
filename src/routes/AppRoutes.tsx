import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Coffees from "../pages/Coffees";
import Desserts from "../pages/Desserts";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Coffees />} />
        <Route path="/desserts" element={<Desserts />} />
        <Route path="/bills" element={<Coffees />} />

        {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};
export default AppRoutes;
