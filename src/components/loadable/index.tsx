import { Suspense } from "react";

import { LoadingScreen } from "../loading-screen";

export const Loadable = (Component: React.LazyExoticComponent<React.ComponentType>) => {
    return (
        <Suspense fallback={<LoadingScreen fullPageCentralized />}>
            <Component />
        </Suspense>
    );
};
