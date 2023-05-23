import { ActionMinusIcon, ActionPlusIcon, ActionCrossIcon } from "@parte-ds/icons";
import { Box, IconButton, Paragraph } from "@parte-ds/ui";
import { styled } from "styled-components";

type BillItemProps = {
  product: SelectedProduct;
  onIncrease?: (product: SelectedProduct) => void;
  onDecrease?: (product: SelectedProduct) => void;
  onRemove?: (product: SelectedProduct) => void;
};

const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 4px;
  margin-right: 4px;
`;

const BillItem = ({ product, onIncrease, onDecrease, onRemove }: BillItemProps) => {
  return (
    <Box display="flex" gap={4} alignItems="center">
      <Img src={product.imgUrl} alt={product.name} />
      <Box>
        <Box display="flex" alignItems="center" gap={8} marginBottom={4}>
          <Paragraph size={200}>
            <span style={{ fontWeight: 500 }}>{product.name}</span>
          </Paragraph>
          <Box display="flex" gap={4}>
            <IconButton variant="fill-primary" Icon={<ActionPlusIcon />} size={16} onClick={() => onIncrease?.(product)} />
            <IconButton variant="fill-primary" Icon={<ActionMinusIcon />} size={16} onClick={() => onDecrease?.(product)} />
            <IconButton variant="fill-primary" Icon={<ActionCrossIcon />} size={16} onClick={() => onRemove?.(product)} />
          </Box>
        </Box>
        <Box display="flex" gap={4}>
          <Paragraph size={100}>가격: {product.price} /</Paragraph>
          <Paragraph size={100}>수량: {product.quantity} /</Paragraph>
          <Paragraph size={100}>합계: {product.price * product.quantity}</Paragraph>
        </Box>
      </Box>
    </Box>
  );
};
export default BillItem;
