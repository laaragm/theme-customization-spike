import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const PageContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    padding: "0 1.5rem",
    marginTop: "1rem",
    [theme.breakpoints.down("md")]: {
        padding: "0 1rem",
    },
}));
