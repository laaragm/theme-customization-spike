import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { Page } from "@/components";
import { PATHS } from "@/routes/paths";
import Button from "@mui/material/Button";

export default function Home() {
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
            </Stack>
        </Page>
    );
}
