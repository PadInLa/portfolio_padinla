import {
  Box,
  Center,
  Fade,
  Grid,
  Heading,
  Image,
  Link,
  LinkBox,
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
                Projects
              </Heading>
            </VStack>
          </Center>
        </Box>
      </Fade>
      <Fade initialScale={0.8} in={true}>
        <LinkBox
          as="article"
          paddingLeft="9.5vw"
          marginBottom="15vh"
          paddingTop="5vh"
        >
          <Grid
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
            bgColor="paulette.700"
            borderRadius="15px"
            templateColumns="repeat(3, 0.31fr)"
            gap={12}
          >
            <Link href="https://github.com/PadInLa/portfolio_padinla">
              <Image
                loading="lazy"
                margin="3vw"
                src="https://github-readme-stats.vercel.app/api/pin/?username=PadInLa&repo=portfolio_padinla&show_owner=true&theme=dark"
              />
            </Link>
            <Link href="https://github.com/gfrieri/LandingPage">
              <Image
                oading="lazy"
                margin="3vw"
                src="https://github-readme-stats.vercel.app/api/pin/?username=gfrieri&repo=LandingPage&show_owner=true&theme=dark"
              />
            </Link>
            <Link href="https://github.com/PadInLa/Compare_and_Go_Front">
              <Image
                loading="lazy"
                margin="3vw"
                src="https://github-readme-stats.vercel.app/api/pin/?username=PadInLa&repo=Compare_and_Go_Front&show_owner=true&theme=dark"
              />
            </Link>
            <Link href="https://github.com/PadInLa/Compare_and_Go_Back">
              <Image
                loading="lazy"
                margin="3vw"
                src="https://github-readme-stats.vercel.app/api/pin/?username=PadInLa&repo=Compare_and_Go_Back&show_owner=true&theme=dark"
              />
            </Link>
            <Link href="https://github.com/PadInLa/BDDCovidNews">
              <Image
                loading="lazy"
                margin="3vw"
                src="https://github-readme-stats.vercel.app/api/pin/?username=PadInLa&repo=BDDCovidNews&show_owner=true&theme=dark"
              />
            </Link>
            <Link href="https://github.com/silvyc/covid-news">
              <Image
                loading="lazy"
                margin="3vw"
                src="https://github-readme-stats.vercel.app/api/pin/?username=silvyc&repo=covid-news&show_owner=true&theme=dark"
              />
            </Link>
          </Grid>
        </LinkBox>
      </Fade>
    </Box>
  );
}
