import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    blue: {
      50: "#f0f7ff",
      100: "#e1effe",
      200: "#c7e0fd",
      300: "#a3d5fc",
      400: "#74c0fc",
      500: "#3b82f6", // Shelly primary blue
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
    },
    brand: {
      50: "#f0f7ff",
      100: "#e1effe",
      200: "#c7e0fd",
      300: "#a3d5fc",
      400: "#3b82f6",
      500: "#2563eb", // Shelly main blue
      600: "#1d4ed8",
      700: "#1e40af",
      800: "#1e3a8a",
      900: "#172554",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "system-ui, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "linear-gradient(135deg, #f0f7ff 0%, #e1effe 100%)",
        color: "#1e293b",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        transition: "all 0.3s ease",
      },
      variants: {
        solid: {
          bg: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
          color: "white",
          _hover: {
            transform: "translateY(-2px)",
            boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
          },
          _active: {
            transform: "translateY(0)",
          },
        },
        outline: {
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "rgba(37, 99, 235, 0.1)",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        borderRadius: "xl",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07)",
        _hover: {
          boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
        },
      },
    },
  },
});

export default theme;
