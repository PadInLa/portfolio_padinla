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
        <Box paddingTop="5vh">
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
                textAlign="center"
                color="white"
                fontSize={{
                  base: "2.8vw",
                  sm: "2vw",
                  md: "2vw",
                  lg: "2vw",
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
              base: "40.1vh",
              sm: "52vh",
              md: "55vh",
              lg: "58vh",
              xl: "67vh",
            }}
            w={{
              base: "80vw",
              sm: "80vw",
              md: "80vw",
              lg: "80vw",
              xl: "80vw",
            }}
            direction={{ base: "column", sm: "column", md: "row" }}
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
                base: "2.1vw",
                md: "2vw",
                lg: "1.7vw",
                xl: "1.5vw",
              }}
            >
              I'm a Software Engineer well-trained in both Front and Back End
              Development. My main skills are, for Front-end development
              React/Javascript and Django/Node.js with PostgreSQL for Back-end
              database development.
              <Text>
                I always strive to make my work as clean, well structured, fast
                and maintainable as possible, that's why I'm constantly keeping
                up to date using cutting edge technology for web development. I
                enjoy learning by myself and I feel very comfortable working
                with challenging and innovative projects.
                <Text>
                  I like to work as a part of a team because that way I can
                  always discover new ways of approaching and solving problems,
                  enhancing my skills along the way.
                </Text>
              </Text>
            </Text>
            <Image
              marginTop={{ md: "6vw" }}
              marginRight={{ md: "4vw" }}
              marginLeft={{ base: "30vw", sm: "30vw", md: "0vw" }}
              marginBottom={{ base: "30vh", sm: "30vh", md: "0vw" }}
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
