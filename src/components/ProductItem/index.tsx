import { Box, Button, Card, Headline, Paragraph } from "@parte-ds/ui";
import { Em, Img } from "./styles";
import { formatToWon } from "../../utils/string.util";

type ProductItemProps = {
  product: Product;
  onClick?: (product: Product) => void;
};

const ProductItem = ({ product, onClick }: ProductItemProps) => {
  const { category, name, price, imgUrl } = product;
  const priceToWon = formatToWon(price);
  return (
    <Card padding={16} display="flex" flexDirection="column" gap={8}>
      <Img src={imgUrl} width="200" height="200" alt="item" />
      <Box display="flex" flexDirection="column" gap={4}>
        <Headline size={500}>
          <Em>[{category[0]}]</Em>
          <span className="menu-name">{name}</span>
        </Headline>
        <Paragraph size={200}>가격: {priceToWon}</Paragraph>
      </Box>
      <Box marginTop={8}>
        <Button type="button" fullWidth onClick={() => onClick?.(product)}>
          장바구니에 담기
        </Button>
      </Box>
    </Card>
  );
};
export default ProductItem;
