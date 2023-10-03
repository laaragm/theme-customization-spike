import { Theme } from "@mui/material/styles";

export function Checkbox(theme: Theme) {
	return {
		MuiCheckbox: {
			styleOverrides: {
				root: {
					color: theme.palette.common.black,
					"&.Mui-checked": {
						color: theme.palette.primary.main,
					},
					".MuiNativeSelect-icon": {
						color: theme.palette.primary.main,
					},
					"&.Mui-disabled": {
						opacity: 0.3,
						"&.Mui-checked": {
							color: theme.palette.text.secondary,
						},
					},
				},
			},
		},
	};
}
