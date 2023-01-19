import { Box, Image, Stack, Text, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => (
  <Box as="header">
    <Stack
      direction={{
        base: "row",
        sm: "row",
        md: "row",
      }}
      justifyContent="space-around"
      alignItems="center"
      bgColor="paulette.400"
      minHeight="9vh"
      px="2rem"
    >
      <Link as={ReactRouterLink} to="/about">
        <Text textColor="white">About Me</Text>
      </Link>
      <Link as={ReactRouterLink} to="/">
        <Image src="img512.png" height="6vh" />
        <Text fontSize="1.6vh" textColor="white">
          PadInLA
        </Text>
      </Link>
      <Link as={ReactRouterLink} to="/projects">
        <Text textColor="white">Projects</Text>
      </Link>
    </Stack>
  </Box>
);
export default Header;
