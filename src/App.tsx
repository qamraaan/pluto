import { ChakraProvider } from "@chakra-ui/react";
import { store, persistor } from "./store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Routes from "./routes/AppRoutes";
import { theme } from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
    </ChakraProvider>
  );
}

export default App;
