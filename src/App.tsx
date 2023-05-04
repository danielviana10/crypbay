
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Router from "./routes";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <ChakraProvider>
        <Router />
        <ToastContainer
          position="top-left"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </ChakraProvider>
    </>
  );
}

export default App;
