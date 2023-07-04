import { extendTheme } from "@chakra-ui/react";
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
        }
    },
    styles: styles,
    config: {
        disableTransitionOnChange: false
    }
})

export default theme;
