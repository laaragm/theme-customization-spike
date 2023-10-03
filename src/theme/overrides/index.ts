import { merge } from "lodash";
import { Theme } from "@mui/material/styles";

import { Button } from "./button";
import { Checkbox } from "./checkbox";
import { MuiCssBaseline } from "./global-styles";

export function ComponentsOverrides(theme: Theme) {
    return merge(MuiCssBaseline(theme), Button(theme), Checkbox(theme));
}
