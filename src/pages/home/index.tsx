import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import { Page } from "@/components";
import { PATHS } from "@/routes/paths";

export default function Home() {
    const theme = useTheme();

    return (
        <Page title={PATHS.home.name}>
            <Stack spacing={3}>
                <Typography variant="body1">Text 1</Typography>
                <Typography variant="body3">Text 2</Typography>
                <Typography variant="body5">Text 3</Typography>

                <Button variant="contained">Test 1</Button>
                <Button color="secondary" variant="contained">
                    Test 2
                </Button>
                <Button color="tertiary" variant="contained">
                    Test 3
                </Button>

                <Card sx={{ backgroundColor: theme.palette.tertiary.main, padding: "1rem" }}>
                    One-off customization
                </Card>
            </Stack>
        </Page>
    );
}
