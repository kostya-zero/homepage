"use client";

import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from "next-themes";

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    const scriptProps = typeof window === "undefined" ? undefined : ({ type: "application/json" } as const);

    return (
        <NextThemeProvider
            attribute={"class"}
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            {...props}
            scriptProps={scriptProps}
        >
            {children}
        </NextThemeProvider>
    );
};

export default ThemeProvider;
