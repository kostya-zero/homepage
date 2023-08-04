import { defineStyleConfig, extendTheme, transition } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
    global: props => ({
        body: {
            bg: mode("#FCFCFC", "#191919")(props),
            transitionProperty: "all",
            transitionDuration: "0.3s"
        }
    })
}

const components = {
    Button: {
        baseStyle: {
            _hover: {
                transform: "scale(1.1)",
            },
            _active: {
                transform: "scale(0.85)"
            }
        }
    },
    Text: {
        baseStyle: props => ({
            color: mode("#191919", "#FCFCFC")(props),
            transitionProperty: "all",
            transitionDuration: ".3s"
        }),
        variants: {
            'footer-text': props => ({
                color: mode("#282828", "#767676")
            })
        }
    }
}

const theme = extendTheme({
    fonts: {
        body: 'Nunito, sans-serif',
        heading: 'Kalam, serif',
    },
    colors: {
        gray: {
            50: '#FCFCFC',
            100: '#E8E8E8',
            200: '#DCDCDC',
            300: '#CDCDCD',
            700: '#323232',
            800: '#191919'
        },
    },
    styles: styles,
    config: {
        disableTransitionOnChange: false
    },
    components: components
})

export default theme;
