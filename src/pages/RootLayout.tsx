import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import theme from "../theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ChakraProvider>
  );
}
