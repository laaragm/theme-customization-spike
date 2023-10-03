export const palette = {
    primary: {
        main: "#3F3BB5",
        contrastText: "#FFFFFF",
    },
    secondary: {
        main: "#B92DA2",
        contrastText: "#FFFFFF",
    },
    tertiary: {
        main: "#F94580",
        contrastText: "#FFFFFF",
    },
    grey: {
        "50": "#E8E8E8",
        "100": "#DDDDDD",
        "200": "#D9D9D9",
        "300": "#F8F8F8",
        "400": "#626262",
        "500": "#AEAEAE",
    },
    background: {
        default: "#2C2C2C",
        paper: "#424242",
    },
    text: {
        primary: "#FFFFFF",
        secondary: "#1E1E1E",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
};

// Module Augmentation - we want MUI's components to accept the new colors which were added to the theme
declare module "@mui/material/styles" {
    interface Palette {
        tertiary: Palette["primary"];
    }
    interface PaletteOptions {
        tertiary: PaletteOptions["primary"];
    }
}

// Update the Button's color prop options
declare module "@mui/material/Button" {
    interface ButtonPropsColorOverrides {
        tertiary: true;
    }
}
