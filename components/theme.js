import { extendTheme, defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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
  Menu: defineStyleConfig({
    baseStyle: defineStyle({
      item: {
        bg: "#FFFFFF",
        color: "#494949",
        _dark: {
          bg: "#2C2C2C",
          color: "#E1E1E1",
          _hover: {
            bg: "#464646",
          },
        },
        _hover: {
          bg: "#F1F1F1",
        },
      },
      list: {
        bg: "#FFFFFF",
        color: "#494949",
        borderColor: "#D9D9D9",
        _dark: {
          bg: "#2C2C2C",
          borderColor: "#494949",
          color: "#E1E1E1",
        },
      },
    }),
  }),
  Button: defineStyleConfig({
    variants: {
      outline: defineStyle({
        backgroundColor: "#FFFFFF",
        borderColor: "#D9D9D9",
        transition: ".2s all",
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
  Link: defineStyleConfig({
    variants: {
      def: defineStyle({
        color: "#999999",
        fontWeight: "600",
        transition: ".2s all ease-in-out",
        _hover: { color: "#191919" },
        _dark: {
          color: "#999999",
          _hover: { color: "#FCFCFC" },
        },
      }),
    },
  }),
  Card: defineStyleConfig({
    variants: {
      def: defineStyle({
        container: {
          borderWidth: "1px",
          backgroundColor: "#FFFFFF",
          color: "#585858",
          transition: ".2s all",
          borderColor: "#D9D9D9",
          _hover: {
            transform: "scale(1.03)",
            backgroundColor: "#F1F1F1",
            borderColor: "#565656",
            textDecoration: "none",
          },

          _dark: {
            backgroundColor: "#232323",
            borderColor: "#494949",
            color: "#E1E1E1",
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
          color: "#585858",
          _dark: {
            color: "#E1E1E1",
          },
        },
      }),
      nohover: defineStyle({
        container: {
          borderWidth: "1px",
          backgroundColor: "#FFFFFF",
          color: "#585858",
          transition: ".2s all",
          borderColor: "#D9D9D9",

          _dark: {
            color: "#E1E1E1",
            backgroundColor: "#232323",
            borderColor: "#494949",
          },
        },
        header: {
          paddingBottom: "0px",
        },
        body: {
          color: "#FFFFFF",
          paddingTop: "0px",
          paddingBottom: "5px",
          _dark: {
            color: "#",
          },
        },
        footer: {
          paddingTop: "0px",
        },
      }),
    },
  }),
  Heading: defineStyleConfig({
    variants: {
      section: defineStyle({
        _dark: {
          color: "#FFFFFF",
          transitionProperty: "all",
          transitionDuration: ".2s",
        },
        transitionProperty: "all",
        transitionDuration: ".2s",
        fontSize: "2xl",
        marginBottom: "0",
        paddingBotton: "5px",
        fontWeight: "600",
        color: "#191919",
      }),
      header: defineStyle({
        fontSize: "4xl",
        transitionProperty: "all",
        transitionDuration: ".2s",
        marginBottom: "0",
        fontWeight: "700",
        color: "#191919",
        _dark: {
          color: "#FFFFFF",
          transitionProperty: "all",
          transitionDuration: ".2s",
        },
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
    initialColorMode: "dark",
    disableTransitionOnChange: false,
  },
  components: components,
});

export default theme;
