import { forwardRef, ReactNode, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { BoxProps } from "@mui/material/Box";

import { LoadingScreen } from "../loading-screen";
import { PageContainer } from "./styles";

interface PageProps extends BoxProps {
	children: ReactNode;
	title: string;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(({ children, title, ...other }, ref) => {
	return (
		<PageContainer ref={ref} {...other}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Suspense fallback={<LoadingScreen fullPageCentralized />}>{children}</Suspense>
		</PageContainer>
	);
});

Page.displayName = "Page";
