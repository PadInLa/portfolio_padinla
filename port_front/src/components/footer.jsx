import { Box, Stack, Text, Image } from "@chakra-ui/react";

const Footer = () => (
  <Box as="Footer">
    <Stack
      direction={{
        base: "row",
        sm: "row",
        md: "row",
      }}
      alignItems="center"
      bgColor="paulette.700"
      minHeight="9vh"
      px="2rem"
    >
      <Image borderRadius="full" src="img512.png" height="2vh" />
      <Text textColor="white">PadInLA 2023, Made with Love. </Text>
    </Stack>
  </Box>
);
export default Footer;
