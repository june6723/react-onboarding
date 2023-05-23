import { Box, Headline } from "@parte-ds/ui";
import ProductItem from "../components/ProductItem";
import useBill from "../components/Bills/useBillContext";

const PRODUCTS: Product[] = [
  { id: 10, category: "DESSERT", name: "라즈베리 쇼콜라", price: 5900, imgUrl: "src/assets/image/bread/라즈베리_쇼콜라.jpeg" },
  { id: 11, category: "DESSERT", name: "클래식 스콘", price: 6000, imgUrl: "src/assets/image/bread/클래식_스콘.jpeg" },
  { id: 12, category: "DESSERT", name: "티라미수 크림 데니쉬", price: 5800, imgUrl: "src/assets/image/bread/티라미수_크림_데니쉬.jpeg" },
];

const Desserts = () => {
  const [_, dispatch] = useBill();
  return (
    <Box padding={30}>
      <Headline size={700} marginBottom={8}>
        디저트 목록
      </Headline>
      <Box display="flex" gap={16} padding={16} flexWrap="wrap">
        {PRODUCTS.map((product) => (
          <ProductItem key={product.id} product={product} onClick={(product) => dispatch({ type: "add_product", product })} />
        ))}
      </Box>
    </Box>
  );
};
export default Desserts;
