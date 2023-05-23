import 나이트로_바닐라_크림 from "../../assets/image/coffee/나이트로_바닐라_크림.jpeg";
import 나이트로_콜드_브루 from "../../assets/image/coffee/나이트로_콜드_브루.jpeg";
import 돌체_콜드_브루 from "../../assets/image/coffee/돌체_콜드_브루.jpeg";
import 민트_콜드_브루 from "../../assets/image/coffee/민트_콜드_브루.jpeg";
import 바닐라_크림_콜드_브루 from "../../assets/image/coffee/바닐라_크림_콜드_브루.jpeg";
import 아이스_토피넛_라떼 from "../../assets/image/coffee/아이스_토피넛_라떼.jpeg";
import 오늘의_커피 from "../../assets/image/coffee/오늘의_커피.jpeg";
import 자바_칩_프라푸치노 from "../../assets/image/coffee/자바_칩_프라푸치노.jpeg";
import 제주_비저링_콜드_브루 from "../../assets/image/coffee/제주_비저링_콜드_브루.jpeg";

import { Box, Headline } from "@parte-ds/ui";

const PRODUCTS = [
  { id: 1, category: "COFFEE", name: "나이트로 바닐라 크림", price: 5900, imgUrl: 나이트로_바닐라_크림 },
  { id: 2, category: "COFFEE", name: "나이트로 콜드 브루", price: 6000, imgUrl: 나이트로_콜드_브루 },
  { id: 3, category: "COFFEE", name: "돌체 콜드 브루", price: 5800, imgUrl: 돌체_콜드_브루 },
  { id: 4, category: "COFFEE", name: "민트 콜드 브루", price: 6100, imgUrl: 민트_콜드_브루 },
  { id: 5, category: "COFFEE", name: "바닐라 크림 콜드 브루", price: 5800, imgUrl: 바닐라_크림_콜드_브루 },
  { id: 6, category: "COFFEE", name: "아이스 토피넛 라떼", price: 5800, imgUrl: 아이스_토피넛_라떼 },
  { id: 7, category: "COFFEE", name: "오늘의 커피", price: 4200, imgUrl: 오늘의_커피 },
  { id: 8, category: "COFFEE", name: "자바 칩 프라푸치노", price: 6300, imgUrl: 자바_칩_프라푸치노 },
  { id: 9, category: "COFFEE", name: "제주 비자림 콜드 브루", price: 6500, imgUrl: 제주_비저링_콜드_브루 },
];

const Coffees = () => {
  return (
    <Box padding={30}>
      <Headline size={700} marginBottom={8}>
        커피 목록
      </Headline>
      <div>
        {PRODUCTS.map((product) => (
          <div key={product.id}>
            {product.name} 가격: {product.price}
          </div>
        ))}
      </div>
    </Box>
  );
};
export default Coffees;
