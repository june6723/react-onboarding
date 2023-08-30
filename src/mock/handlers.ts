import 나이트로_바닐라_크림 from "../../assets/image/coffee/나이트로_바닐라_크림.jpeg";
import 나이트로_콜드_브루 from "../../assets/image/coffee/나이트로_콜드_브루.jpeg";
import 돌체_콜드_브루 from "../../assets/image/coffee/돌체_콜드_브루.jpeg";
import 민트_콜드_브루 from "../../assets/image/coffee/민트_콜드_브루.jpeg";
import 바닐라_크림_콜드_브루 from "../../assets/image/coffee/바닐라_크림_콜드_브루.jpeg";
import 아이스_토피넛_라떼 from "../../assets/image/coffee/아이스_토피넛_라떼.jpeg";
import 오늘의_커피 from "../../assets/image/coffee/오늘의_커피.jpeg";
import 자바_칩_프라푸치노 from "../../assets/image/coffee/자바_칩_프라푸치노.jpeg";
import 제주_비저링_콜드_브루 from "../../assets/image/coffee/제주_비저링_콜드_브루.jpeg";
import 라즈베리_쇼콜라 from "../../assets/image/bread/라즈베리_쇼콜라.jpeg";
import 클래식_스콘 from "../../assets/image/bread/클래식_스콘.jpeg";
import 티라미수_크림_데니쉬 from "../../assets/image/bread/티라미수_크림_데니쉬.jpeg";
import { rest } from "msw";
import Chance from "chance";

const coffees = [
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
const desserts = [
  { id: 10, category: "DESSERT", name: "라즈베리 쇼콜라", price: 5900, imgUrl: 라즈베리_쇼콜라 },
  { id: 11, category: "DESSERT", name: "클래식 스콘", price: 6000, imgUrl: 클래식_스콘 },
  { id: 12, category: "DESSERT", name: "티라미수 크림 데니쉬", price: 5800, imgUrl: 티라미수_크림_데니쉬 },
];

const SERVER_ERROR = "Server Error";
const IN_MAINTENANCE = "In maintenance";

const chance = new Chance();
const randomNumber = () => chance.integer({ min: 1, max: 100 });
const probability = () => {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      const random = randomNumber();
      if (random <= 10) {
        reject(new Error(IN_MAINTENANCE));
        return;
      }
      if (random <= 30) {
        reject(new Error(SERVER_ERROR));
        return;
      } else if (random <= 50) {
        resolve(false); // empty 일경우
        return;
      }
      resolve(true); // 성공했을 경우
    }, 500);
  });
};

const isError = (error: unknown): error is Error => {
  if (error !== null && typeof error === "object") {
    return Object.prototype.hasOwnProperty.call(error, "message");
  }
  return false;
};

export const handlers = [
  // 커피 목록
  rest.get("/api/coffees", async (req, res, ctx) => {
    try {
      const result = await probability();
      return res(ctx.status(200), ctx.json(coffees));
    } catch (error) {
      if (isError(error) && error.message === IN_MAINTENANCE) {
        return res(ctx.status(503, IN_MAINTENANCE));
      }
      return res(ctx.status(500));
    }
  }),
  // 디저트 목록
  rest.get("/api/desserts", async (req, res, ctx) => {
    try {
      const result = await probability();
      return res(ctx.status(200), ctx.json(desserts));
    } catch (error) {
      if (isError(error) && error.message === IN_MAINTENANCE) {
        return res(ctx.status(503, IN_MAINTENANCE));
      }
      return res(ctx.status(500));
    }
  }),

  // 주문 하기
  rest.post("/api/bill", async (req, res, ctx) => {
    try {
      const { totalPrice } = await req.json();

      return res(ctx.status(200), ctx.json({ totalPrice }));
    } catch (error) {
      return res(ctx.status(500));
    }
  }),
];
