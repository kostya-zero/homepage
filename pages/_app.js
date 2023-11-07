import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Work_Sans, Open_Sans } from "next/font/google";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FCFCFC", "#191919")(props),
      transitionProperty: "all",
      transitionDuration: "0.2s",
    },
  }),
};

const components = {
  Button: defineStyleConfig({
    variants: {
      outline: defineStyle({
        backgroundColor: "#FFFFFF",
        borderColor: "#D9D9D9",
        transition: ".3s all",
        _hover: {
          transform: "scale(1.15)",
          backgroundColor: "#F1F1F1",
          borderColor: "#565656",
        },
        _active: {
          transform: "scale(0.9)",
        },

        _dark: {
          backgroundColor: "#2C2C2C",
          borderColor: "#494949",
          _hover: {
            transform: "scale(1.15)",
            backgroundColor: "#464646",
            borderColor: "#999999",
          },
          _active: {
            transform: "scale(0.9)",
          },
        },
      }),
    },
  }),
  Card: defineStyleConfig({
    variants: {
      "def-card": defineStyle({
        container: {
          borderWidth: "1px",
          backgroundColor: "#FFFFFF",
          color: "#585858",
          transition: ".3s all",
          borderColor: "#D9D9D9",
          _hover: {
            transform: "scale(1.03)",
            backgroundColor: "#F1F1F1",
            borderColor: "#565656",
          },

          _dark: {
            backgroundColor: "#232323",
            borderColor: "#494949",
            _hover: {
              transform: "scale(1.03)",
              backgroundColor: "#464646",
              borderColor: "#999999",
            },
            _active: {
              transform: "scale(0.99)",
            },
          },
        },
        body: {
          color: "#FFFFFF",
          _dark: {
            color: "#",
          },
        },
      }),
    },
  }),
  Heading: defineStyleConfig({
    variants: {
      section: defineStyle({
        _dark: {
          color: "#FFFFFF",
          transition: ".3 all",
        },
        transition: ".3 all",
        fontSize: "2xl",
        marginBottom: "0",
        paddingBotton: "5px",
        fontWeight: "600",
        color: "#191919",
      }),
      header: defineStyle({
        fontSize: "4xl",
        transition: ".3 all",
        marginBottom: "0",
        fontWeight: "700",
        color: "#191919",
        _dark: { color: "#FFFFFF" },
      }),
    },
  }),
  Text: defineStyleConfig({
    baseStyle: {
      color: "#494949",
      transitionProperty: "all",
      transitionDuration: ".2s",
      fontWeight: "400",
      fontSize: "md",
      _dark: { color: "#E1E1E1" },
    },
    variants: {
      "footer-text": defineStyle({
        color: "#999999",
        _dark: { color: "#999999" },
      }),
      logo: defineStyle({
        color: "#191919",
        _dark: { color: "#FCFCFC" },
      }),
    },
  }),
};

const opensans = Open_Sans({ subsets: ["latin"] });
const worksans = Work_Sans({ subsets: ["latin"] });

const theme = extendTheme({
  fonts: {
    body: "var(--font-opensans)",
    heading: "var(--font-worksans)",
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
            --font-opensans: ${opensans.style.fontFamily};
            --font-worksans: ${worksans.style.fontFamily};
          }
        `}
      </style>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
