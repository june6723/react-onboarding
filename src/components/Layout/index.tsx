import { Box, Paragraph, Tab, Tabs } from "@parte-ds/ui";
import { Link, Outlet, useMatch } from "react-router-dom";
import Header from "../Header";
import { BillContextProvider } from "../Bills/BillContext";
import useBill from "../Bills/useBillContext";

const MENUS: MenuItem[] = [
  { url: "/", name: "Coffees" },
  { url: "/desserts", name: "Desserts" },
  { url: "/bills", name: "Bills" },
];

const LinkItem = ({ url, name }: MenuItem) => {
  const match = useMatch(url);
  return (
    <Tab selected={!!match} variant="Primary">
      <Link to={url}>{name}</Link>
    </Tab>
  );
};

const MiniBills = () => {
  const [{ products }] = useBill();
  const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  return (
    <Box>
      <Paragraph size={200}>총 금액 : {total}</Paragraph>
    </Box>
  );
};

export default function Layout() {
  return (
    <BillContextProvider>
      <div>
        <Header>
          <Tabs>
            {MENUS.map((menu) => (
              <LinkItem key={menu.name} {...menu} />
            ))}
          </Tabs>
          <MiniBills />
        </Header>

        <Outlet />
      </div>
    </BillContextProvider>
  );
}
