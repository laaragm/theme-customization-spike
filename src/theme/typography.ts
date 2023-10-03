export const typography = {
    fontFamily: "'Poppins', sans-serif",
    fontWeightRegular: 200,
    fontWeightMedium: 400,
    fontWeightBold: 700,
    fontSize: 16,
    h1: {
        fontWeight: 700,
        component: "h1",
        ...generateResponsiveText({ xs: "2.5rem", sm: "2.5rem", md: "2.5rem", lg: "3rem", xl: "3rem" }),
    },
    h2: {
        fontWeight: 700,
        component: "h2",
        ...generateResponsiveText({ xs: "2rem", sm: "2rem", md: "2rem", lg: "2.5rem", xl: "2.5rem" }),
    },
    h3: {
        fontWeight: 700,
        ...generateResponsiveText({ xs: "1.75rem", sm: "1.75rem", md: "1.75rem", lg: "2.25rem", xl: "2.25rem" }),
        component: "h3",
    },
    h4: {
        fontWeight: 700,
        ...generateResponsiveText({ xs: "1.5rem", sm: "1.5rem", md: "1.5rem", lg: "2rem", xl: "2rem" }),
        component: "h4",
    },
    h5: {
        fontWeight: 700,
        ...generateResponsiveText({ xs: "1.25rem", sm: "1.25rem", md: "1.25rem", lg: "1.75rem", xl: "1.75rem" }),
        component: "h5",
    },
    h6: {
        fontWeight: 700,
        ...generateResponsiveText({ xs: "1.25rem", sm: "1.25rem", md: "1.25rem", lg: "1.5rem", xl: "1.5rem" }),
        component: "h6",
    },
    body1: {
        fontSize: "1.375rem",
        fontWeight: 400,
        component: "p",
    },
    body2: {
        fontSize: "1.25rem",
        fontWeight: 400,
        component: "p",
    },
    body3: {
        fontSize: "1.125rem",
        fontWeight: 400,
        component: "p",
    },
    body4: {
        fontSize: "1rem",
        fontWeight: 400,
        component: "p",
    },
    body5: {
        fontSize: "0.875rem",
        fontWeight: 400,
        component: "p",
    },
    body6: {
        fontSize: "0.75rem",
        fontWeight: 400,
        component: "p",
    },
    button: {
        fontWeight: 400,
        fontSize: "1rem",
    },
};

// Module Augmentation - we want to add new variants to the Typography component
declare module "@mui/material/styles" {
    interface TypographyVariants {
        body3: React.CSSProperties;
        body4: React.CSSProperties;
        body5: React.CSSProperties;
        body6: React.CSSProperties;
    }

    // Allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        body3?: React.CSSProperties;
        body4?: React.CSSProperties;
        body5?: React.CSSProperties;
        body6?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
    interface TypographyPropsVariantOverrides {
        body3: true;
        body4: true;
        body5: true;
        body6: true;
    }
}

function generateResponsiveText({
    xs,
    sm,
    md,
    lg,
    xl,
}: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
}) {
    return {
        "@media (min-width: 0)": {
            fontSize: xs,
        },
        "@media (min-width: 640px)": {
            fontSize: sm,
        },
        "@media (min-width: 768px)": {
            fontSize: md,
        },
        "@media (min-width: 1024px)": {
            fontSize: lg,
        },
        "@media (min-width: 1280px)": {
            fontSize: xl,
        },
    };
}
