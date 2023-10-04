import { styled } from "@mui/material/styles";

export const StyledDropdownItem = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "3px",
    "&:hover": {
        background: theme.palette.primary.main,
        cursor: "pointer",
    },
}));
