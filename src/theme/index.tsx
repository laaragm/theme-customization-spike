import { useMemo, ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";

import { palette } from "./palette";
import { typography } from "./typography";
import { breakpoints } from "./breakpoints";
import { ComponentsOverrides } from "./overrides";

type ThemeConfigProps = {
    children: ReactNode;
};

export function ThemeConfig({ children }: ThemeConfigProps) {
    const themeOptions: ThemeOptions = useMemo(
        () => ({
            palette,
            typography,
            breakpoints,
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = ComponentsOverrides(theme);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
