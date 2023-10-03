import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { router } from "./routes";
import { ThemeConfig } from "./theme";
import { LoadingScreen } from "./components";

function App() {
    return (
        <HelmetProvider>
            <ThemeConfig>
                <RouterProvider router={router} fallbackElement={<LoadingScreen fullPageCentralized />} />
            </ThemeConfig>
        </HelmetProvider>
    );
}

export default App;
