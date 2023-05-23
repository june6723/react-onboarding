import { Box, Paragraph, Tab, Tabs } from "@parte-ds/ui";
import { StyleShopIcon } from "@parte-ds/icons";
import { Link, Outlet, useMatch } from "react-router-dom";
import Header from "../Header";
import { BillContextProvider } from "../Bills/BillContext";
import useBill from "../Bills/useBillContext";
import { styled } from "styled-components";
import { formatToWon } from "../../utils/string.util";
import { isFreeShipping } from "../../domain/bill";

const MENUS: MenuItem[] = [
  { url: "/", name: "Coffees" },
  { url: "/desserts", name: "Desserts" },
  { url: "/bills", name: "Bills" },
];

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const LinkItem = ({ url, name }: MenuItem) => {
  const match = useMatch(url);
  const selected = match !== null;

  return (
    <Tab selected={selected} variant="Primary">
      <StyledLink to={url}>{name}</StyledLink>
    </Tab>
  );
};

const MiniBills = () => {
  const [{ products }] = useBill();
  const total = products.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  const totalPrice = formatToWon(total);
  const freeShipping = isFreeShipping(total);

  return (
    <Box display="flex" alignItems="center" gap={8}>
      {freeShipping && <StyleShopIcon size={16} color="G500" />}
      <Paragraph size={200}>총 금액 : {totalPrice}</Paragraph>
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
