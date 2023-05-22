import { PropsWithChildren } from "react";
import { Container } from "./styles";

const Header = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};
export default Header;
