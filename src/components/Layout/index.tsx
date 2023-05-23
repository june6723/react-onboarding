import { Box } from "@parte-ds/ui";
import { Link, Outlet } from "react-router-dom";

const MENUS = [
  { url: "/", name: "Coffees" },
  { url: "/desserts", name: "Desserts" },
  { url: "/bills", name: "Bills" },
];

export default function Layout() {
  return (
    <div>
      <Box display="flex" alignItems="center" gap={4}>
        {MENUS.map((menu) => (
          <Link key={menu.name} to={menu.url}>
            {menu.name}
          </Link>
        ))}
      </Box>
      <Outlet />
    </div>
  );
}
