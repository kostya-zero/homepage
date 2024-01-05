import NavBar from "@/components/NavBar";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import { Work_Sans, Open_Sans } from "next/font/google";
import theme from "@/components/theme";

const opensans = Open_Sans({ subsets: ["latin"] });
const worksans = Work_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps, router }) {
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
                <NavBar/>
                <ScaleFade
                    key={router.route}
                    initialScale={0.9}
                    in="true"
                >
                    <Component {...pageProps} />
                </ScaleFade>
            </ChakraProvider>
        </>
    );
}
