import { Theme } from "@mui/material/styles";

export function Button(theme: Theme) {
    return {
        MuiButton: {
            styleOverrides: {
                containedPrimary: {
                    backgroundColor: theme.palette.primary.main,
                    "&:hover": {
                        opacity: 0.9,
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.grey[400],
                        color: theme.palette.common.white,
                    },
                },
                containedSecondary: {
                    backgroundColor: theme.palette.secondary.main,
                    "&:hover": {
                        opacity: 0.9,
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        opacity: 0.7,
                    },
                },
                outlinedPrimary: {
                    color: theme.palette.text.primary,
                    backgroundColor: "transparent",
                    border: "2px solid " + theme.palette.primary.main,
                    "&:hover": {
                        border: "2px solid " + theme.palette.secondary.main,
                    },
                    "&.Mui-disabled": {
                        color: theme.palette.text.primary,
                        backgroundColor: "transparent",
                        border: `2px solid ${theme.palette.primary.main}`,
                        opacity: 0.3,
                    },
                },
                outlinedSecondary: {
                    color: theme.palette.common.black,
                    backgroundColor: "transparent",
                    border: `2px solid ${theme.palette.common.black}`,
                    "&:hover": {
                        color: theme.palette.common.black,
                        backgroundColor: theme.palette.background.paper,
                        border: `2px solid ${theme.palette.common.black}`,
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        opacity: 0.3,
                    },
                },
                containedTertiary: {
                    backgroundColor: theme.palette.tertiary.main,
                    "&:hover": {
                        opacity: 0.9,
                    },
                    "&.Mui-disabled": {
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                        opacity: 0.7,
                    },
                },
            },
        },
    };
}
