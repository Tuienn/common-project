import { createBrowserRouter, RouterProvider } from "react-router";
import PageNotFound from "../layout/PageNotFound";

const Routes: React.FC = () => {
    const router = createBrowserRouter([
        {
            path: "*",
            element: <PageNotFound />,
        },
    ]);
    return <RouterProvider router={router} />;
};

export default Routes;
