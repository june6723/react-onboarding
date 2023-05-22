import { Box } from "@parte-ds/ui";
import { styled } from "styled-components";

export const Container = styled(Box)`
  ${({ theme }) => theme.elevation.elevation1};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;
