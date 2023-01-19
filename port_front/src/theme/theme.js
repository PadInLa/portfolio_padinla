import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    paulette: {
      400: "#00aaaa",
      500: "#f50057",
      600: "#303030",
      700: "#424242",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: "#303030",
      },
    }),
  },
});
