import { Box, Paragraph, Spinner } from "@parte-ds/ui";

const Loading = () => {
  return (
    <Box display="flex" gap={8}>
      <Paragraph size={300}>Loading...</Paragraph>
      <Spinner />
    </Box>
  );
};
export default Loading;
