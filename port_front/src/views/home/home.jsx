import {
  Box,
  Text,
  Image,
  VStack,
  ScaleFade,
  Fade,
  Grid,
  Heading,
} from "@chakra-ui/react";
import Writer from "../../components/writer";
import { useRef } from "react";
import useIsInViewport from "../../components/viewport";
import "../home/home.css";

function Home() {
  const ref2 = useRef(null);
  const inViewport2 = useIsInViewport(ref2);

  return (
    <Box w="full" alignItems="center">
      <Fade initialScale={0.8} in={true}>
        <Box paddingLeft="9.5vw" paddingTop="10vh">
          <VStack
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
            <Image
              marginTop="2vh"
              borderRadius="15px"
              h="35vh"
              w="auto"
              src="Bestres.png"
            />
            <Text fontSize="4.8vw" color="white">
              Juan David Padilla Páez
            </Text>
            <Heading>
              <Writer />
            </Heading>
          </VStack>
        </Box>
      </Fade>
      <ScaleFade initialScale={0.8} in={inViewport2}>
        <Box
          paddingLeft={{
            base: "15vw",
            sm: "15vw",
            md: "20vw",
            lg: "20vw",
            xl: "22vw",
          }}
          marginTop="17vh"
          marginBottom="17vh"
          ref={ref2}
        >
          <Grid
            h={{
              base: "550px",
              sm: "60vh",
              md: "60vh",
              lg: "60vh",
              xl: "78vh",
            }}
            w={{
              base: "280px",
              sm: "420px",
              md: "60vw",
              lg: "55vw",
              xl: "55vw",
            }}
            borderRadius="15px"
            bgColor="paulette.700"
            templateColumns="repeat(3, 1fr)"
            gap={1}
          >
            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo1.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo2.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo3.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo4.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo5.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo6.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo7.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo8.png"
            />

            <Image
              marginTop="2vw"
              marginLeft="4vw"
              w={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              h={{
                base: "60px",
                sm: "100px",
                md: "120px",
                lg: "140px",
                xl: "180px",
              }}
              borderRadius="full"
              src="Logo9.png"
            />
          </Grid>
        </Box>
      </ScaleFade>
    </Box>
  );
}

export default Home;
