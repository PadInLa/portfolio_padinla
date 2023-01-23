import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    paulette: {
      400: "rgba(0, 170, 170, 0.8)",
      500: "#f50057",
      600: "#303030",
      700: "rgba(66, 66, 66, 0.85)",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "#303030",
      },
    }),
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`,
  },
});
