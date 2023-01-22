import {
  Box,
  Center,
  Fade,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Fade initialScale={0.8} in={true}>
        <Box paddingTop="10vh">
          <Center>
            <VStack
              h={{
                base: "10vh",
                md: "10vh",
                lg: "10vh",
                xl: "10vh",
              }}
              w={{
                base: "20vw",
                sm: "20vw",
                md: "20vw",
                lg: "20vw",
                xl: "20vw",
              }}
              bgColor="paulette.700"
              borderRadius="15px"
            >
              <Heading
                as="span"
                margin="3.5vh"
                textAlign="justify"
                color="white"
                fontSize={{
                  base: "2.8vw",
                  md: "2.4vw",
                  lg: "2.0vw",
                  xl: "1.5vw",
                }}
              >
                About me
              </Heading>
            </VStack>
          </Center>
        </Box>
      </Fade>
      <Fade initialScale={0.8} in={true}>
        <Box paddingLeft="9.5vw" marginBottom="15vh" paddingTop="5vh">
          <Flex
            h={{
              base: "48vh",
              md: "55vh",
              lg: "58vh",
              xl: "65vh",
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
            <Text
              as="span"
              flex="1"
              margin="4vw"
              textAlign="justify"
              color="white"
              fontSize={{
                base: "2.8vw",
                md: "2.4vw",
                lg: "2.0vw",
                xl: "1.5vw",
              }}
            >
              Amogus Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus in suscipit velit. Sed ornare condimentum nisi, vel
              fringilla nunc. Nam sed mattis tortor. Sed semper porta justo id
              varius. In volutpat hendrerit dolor, egestas tristique nulla.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              rutrum pulvinar rutrum. Mauris sodales cursus mi lobortis
              vehicula.
            </Text>
            <Image
              marginTop="6vw"
              marginRight="4vw"
              borderRadius="full"
              w={{
                base: "100px",
                sm: "130px",
                md: "170px",
                lg: "200px",
                xl: "350px",
              }}
              h={{
                base: "100px",
                sm: "130px",
                md: "170px",
                lg: "200px",
                xl: "350px",
              }}
              src="img2.png"
            />
          </Flex>
        </Box>
      </Fade>
    </Box>
  );
}
