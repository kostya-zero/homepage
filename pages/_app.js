import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Inter, Kalam } from "next/font/google";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FCFCFC", "#191919")(props),
      transitionProperty: "all",
      transitionDuration: "0.3s",
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      _hover: {
        transform: "scale(1.1)",
      },
      _active: {
        transform: "scale(0.85)",
      },
    },
  },
  Text: {
    baseStyle: (props) => ({
      color: mode("#191919", "#FCFCFC")(props),
      transitionProperty: "all",
      transitionDuration: ".3s",
      fontWeight: "400",
    }),
    variants: {
      "footer-text": (props) => ({
        color: mode("#999999", "#999999")(props),
      }),
    },
  },
};

const inter = Inter({ subsets: ["latin"] });
const kalam = Kalam({ weight: "700", subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    body: "var(--font-inter)",
    heading: "var(--font-kalam)",
  },
  colors: {
    gray: {
      50: "#FCFCFC",
      100: "#E8E8E8",
      200: "#DCDCDC",
      300: "#CDCDCD",
      700: "#323232",
      800: "#191919",
    },
  },
  styles: styles,
  config: {
    disableTransitionOnChange: false,
  },
  components: components,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>
        {`
            :root {
                --font-inter: ${inter.style.fontFamily};
                --font-kalam: ${kalam.style.fontFamily};
            }`}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
