import { Box, Text, Image, VStack } from "@chakra-ui/react";
import Writer from "../../components/writer";

function Home() {
  return (
    <Box>
      <Box paddingLeft="10vw" paddingTop="5vh">
        <VStack
          h={{
            base: "40vh",
            md: "45vh",
            lg: "50vh",
            xl: "52vh",
          }}
          w={{
            base: "80vw",
            sm: "80vw",
            md: "80vw",
            lg: "80vw",
            xl: "80vw",
          }}
          bgColor="paulette.700"
          borderRadius="15px"
        >
          <Image margin="2vh" borderRadius="full" src="unknown.png" />
          <Text fontSize="4.8vw" color="white">
            Juan David Padilla Páez
          </Text>
          <Writer text="I'm a Full-Stack Web Developer." />
        </VStack>
      </Box>

      <Box paddingLeft="15vw" paddingTop="5vh">
        <VStack
          h={{
            base: "40vh",
            md: "45vh",
            lg: "50vh",
            xl: "52vh",
          }}
          w={{
            base: "50vw",
            sm: "50vw",
            md: "50vw",
            lg: "50vw",
            xl: "50vw",
          }}
          borderRadius="15px"
          bgColor="paulette.700"
        ></VStack>
      </Box>

      <Box paddingLeft="35vw" paddingTop="5vh" paddingBottom="5vh">
        <VStack
          h={{
            base: "40vh",
            md: "45vh",
            lg: "50vh",
            xl: "52vh",
          }}
          w={{
            base: "50vw",
            sm: "50vw",
            md: "50vw",
            lg: "50vw",
            xl: "50vw",
          }}
          borderRadius="15px"
          bgColor="paulette.700"
        ></VStack>
      </Box>
    </Box>
  );
}

export default Home;
