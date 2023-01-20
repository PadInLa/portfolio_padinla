import { Box } from "@chakra-ui/react";
import Footer from "./components/footer";
import Header from "./components/header";
import Routing from "./routes/routes";

function App() {
  return (
    <Box>
      <Box top={0} zIndex={2}>
        <Header />
      </Box>
      <Box>
        <Routing />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
