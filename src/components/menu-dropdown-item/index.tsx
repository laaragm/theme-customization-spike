import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

import { StyledDropdownItem } from "./styles";

interface MenuDropdownItemProps {
    text: string;
    onClick: () => void;
}

export function MenuDropdownItem({ text, onClick }: MenuDropdownItemProps) {
    return (
        <Box sx={{ p: 1 }}>
            <StyledDropdownItem onClick={onClick}>
                <Typography variant="h6">{text}</Typography>
            </StyledDropdownItem>
        </Box>
    );
}
