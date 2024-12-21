import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App, ConfigProvider, ThemeConfig } from "antd";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/global.css";
import "./index.css";
import Routes from "./routes/Routes";
const queryClient = new QueryClient();

const theme: ThemeConfig = {};


createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ConfigProvider theme={theme}>
                <App>
                    <Routes />
                </App>
            </ConfigProvider>
        </QueryClientProvider>
    </StrictMode>
);
