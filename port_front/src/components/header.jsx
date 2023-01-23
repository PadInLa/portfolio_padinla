import { Box, Image, Stack, Text, Link, HStack } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Header = () => (
  <Box as="header">
    <Stack
      direction={{
        base: "column",
        sm: "row",
        md: "row",
      }}
      justifyContent="space-between"
      bgColor="rgba(0, 170, 170, 0.7)"
      minHeight="9vh"
      px="2rem"
    >
      <Link as={ReactRouterLink} to="/">
        <HStack paddingTop="1.5vh" alignContent="center">
          <Image borderRadius="full" src="img512.png" height="6vh" />
          <Text fontSize="15px" textColor="white">
            PadInLA
          </Text>
        </HStack>
      </Link>
      <HStack paddingRight="1vw" spacing="2vw">
        <Link as={ReactRouterLink} to="/about">
          <Text textColor="white">About Me</Text>
        </Link>
        <Link as={ReactRouterLink} to="/projects">
          <Text textColor="white">Projects</Text>
        </Link>
      </HStack>
    </Stack>
  </Box>
);
export default Header;
