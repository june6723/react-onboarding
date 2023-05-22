import { Box, Headline } from "@parte-ds/ui";
import ProductItem from "../components/ProductItem";
import useBill from "../components/Bills/useBillContext";

const PRODUCTS: Product[] = [
  { id: 1, category: "COFFEE", name: "나이트로 바닐라 크림", price: 5900, imgUrl: "src/assets/image/coffee/나이트로_바닐라_크림.jpeg" },
  { id: 2, category: "COFFEE", name: "나이트로 콜드 브루", price: 6000, imgUrl: "src/assets/image/coffee/나이트로_콜드_브루.jpeg" },
  { id: 3, category: "COFFEE", name: "돌체 콜드 브루", price: 5800, imgUrl: "src/assets/image/coffee/돌체_콜드_브루.jpeg" },
  { id: 4, category: "COFFEE", name: "민트 콜드 브루", price: 6100, imgUrl: "src/assets/image/coffee/민트_콜드_브루.jpeg" },
  { id: 5, category: "COFFEE", name: "바닐라 크림 콜드 브루", price: 5800, imgUrl: "src/assets/image/coffee/바닐라_크림_콜드_브루.jpeg" },
  { id: 6, category: "COFFEE", name: "아이스 토피넛 라떼", price: 5800, imgUrl: "src/assets/image/coffee/아이스_토피넛_라떼.jpeg" },
  { id: 7, category: "COFFEE", name: "오늘의 커피", price: 4200, imgUrl: "src/assets/image/coffee/오늘의_커피.jpeg" },
  { id: 8, category: "COFFEE", name: "자바 칩 프라푸치노", price: 6300, imgUrl: "src/assets/image/coffee/자바_칩_프라푸치노.jpeg" },
  { id: 9, category: "COFFEE", name: "제주 비자림 콜드 브루", price: 6500, imgUrl: "src/assets/image/coffee/제주_비저링_콜드_브루.jpeg" },
];

const Coffees = () => {
  const [_, dispatch] = useBill();

  return (
    <Box padding={30}>
      <Headline size={700} marginBottom={8}>
        커피 목록
      </Headline>
      <Box display="flex" gap={16} padding={16} flexWrap="wrap">
        {PRODUCTS.map((product) => (
          <ProductItem key={product.id} product={product} onClick={(product) => dispatch({ type: "add_product", product })} />
        ))}
      </Box>
    </Box>
  );
};
export default Coffees;
