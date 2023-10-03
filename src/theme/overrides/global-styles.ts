export function MuiCssBaseline() {
    return {
        MuiCssBaseline: {
            styleOverrides: {
                "*": {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box",
                },
                html: {
                    msTextSizeAdjust: "100%",
                    WebkitOverflowScrolling: "touch",
                },
                body: {
                    width: "100vw",
                    height: "100vh",
                },
                "#root": {
                    width: "100vw",
                    height: "100vh",
                    overflowY: "auto",
                    overflowX: "hidden",
                },
            },
        },
    };
}
