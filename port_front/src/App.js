import { Box } from "@chakra-ui/react";
import Header from "./components/header";
import Routing from "./routes/routes";

function App() {
  return (
    <Box>
      <Box>
        <Header />
      </Box>
      <Box>
        <Routing />
      </Box>
    </Box>
  );
}

export default App;
