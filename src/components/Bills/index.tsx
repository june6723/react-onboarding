import { Box, Button, Headline, Paragraph } from "@parte-ds/ui";

const Bills = () => {
  return (
    <Box padding={30} display="flex" flexDirection="column" gap={16}>
      <Box>
        <Headline size={700} marginBottom={12}>
          커피
        </Headline>
      </Box>
      <Box>
        <Headline size={700} marginBottom={12}>
          디저트
        </Headline>
      </Box>
      <Headline size={700}>주문 확인</Headline>
      <Paragraph size={200}>커피: </Paragraph>
      <Paragraph size={200}>디저트: </Paragraph>

      <Paragraph size={200}>총합: </Paragraph>
      <Button
        type="button"
        onClick={() => {
          alert(`주문하기`);
        }}
      >
        주문하기
      </Button>
    </Box>
  );
};
export default Bills;
