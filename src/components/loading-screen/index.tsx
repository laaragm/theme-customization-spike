import { SxProps } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

import { Wrapper } from "./styles";

type LoadingScreenProps = {
    fullPageCentralized?: boolean;
    size?: number;
    sx?: SxProps;
};

export function LoadingScreen({ fullPageCentralized = false, size = 80, ...other }: LoadingScreenProps) {
    return (
        <Wrapper fullPageCentralized={fullPageCentralized} {...other}>
            <CircularProgress size={size} />
        </Wrapper>
    );
}
