import PageHome from "@/pages/home/PageHome";
import { BaseLayout } from "@/widgets/ui";
import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

const RoutesProviderFC: FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <PageHome />,
        },
      ],
    },

    {
      path: "*",
      element: <div>404</div>,
    },
  ]);

  return <RouterProvider router={router} />;
};
export default RoutesProviderFC;
