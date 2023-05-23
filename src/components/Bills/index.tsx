import { Alert, Box, Button, Headline, Paragraph } from "@parte-ds/ui";
import useBill from "./useBillContext";
import BillItem from "../BillItem";
import { formatToWon } from "../../utils/string.util";
import { filterProductsByCategory, getTotalPrice } from "../../domain/product";
import { isFreeShipping } from "../../domain/bill";
import { freeShippingPrice, shippingFee } from "../../constants/price";

const Bills = () => {
  const [{ products }, dispatch] = useBill();

  const coffees = filterProductsByCategory("COFFEE", products);
  const desserts = filterProductsByCategory("DESSERT", products);

  const coffeesTotal = getTotalPrice(coffees);
  const dessertsTotal = getTotalPrice(desserts);

  const totalPrice = coffeesTotal + dessertsTotal;
  const freeShipping = isFreeShipping(totalPrice);
  const finalPrice = freeShipping ? totalPrice : totalPrice + shippingFee;

  const handleIncrease = (product: Product) => dispatch({ type: "add_product", product });
  const handleDecrease = ({ id }: Product) => dispatch({ type: "decrease_product", id });
  const handleRemove = ({ id }: Product) => dispatch({ type: "remove_product", id });

  return (
    <Box padding={30} display="flex" flexDirection="column" gap={16}>
      <Box>
        <Headline size={700} marginBottom={12}>
          커피
        </Headline>
        <Box display="flex" gap={8} flexDirection="column">
          {coffees.map((c) => (
            <BillItem key={c.id} product={c} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} />
          ))}
        </Box>
      </Box>
      <Box>
        <Headline size={700} marginBottom={12}>
          디저트
        </Headline>
        <Box display="flex" gap={8} flexDirection="column">
          {desserts.map((d) => (
            <BillItem key={d.id} product={d} onIncrease={handleIncrease} onDecrease={handleDecrease} onRemove={handleRemove} />
          ))}
        </Box>
      </Box>
      <Headline size={700}>주문 확인</Headline>
      <Paragraph size={200}>커피: {formatToWon(coffeesTotal)}</Paragraph>
      <Paragraph size={200}>디저트: {formatToWon(dessertsTotal)}</Paragraph>
      {!freeShipping && (
        <>
          <Paragraph size={200}>배송비: {formatToWon(shippingFee)}</Paragraph>
          <Alert
            type="alert-inline"
            status="info"
            title="팁"
            message={`${formatToWon(freeShippingPrice - totalPrice)}만큼 더 주문하시면 배송비가 무료입니다.`}
          />
        </>
      )}
      <Paragraph size={200}>총합: {formatToWon(finalPrice)}</Paragraph>
      <Button
        type="button"
        onClick={() => {
          alert(`총 금액이 ${formatToWon(finalPrice)} 나왔습니다`);
          dispatch({ type: "reset" });
        }}
      >
        주문하기
      </Button>
    </Box>
  );
};
export default Bills;
