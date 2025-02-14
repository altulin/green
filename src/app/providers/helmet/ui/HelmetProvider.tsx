import { FC, JSX } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Seo } from "./Seo";
import { TSeo } from "@/shared/types/helmet/seo";

const HelmetProviderFC: FC<{ children: JSX.Element }> = ({ children }) => {
  const seoProps: TSeo = {
    title: import.meta.env.VITE_APP_TITLE,
    description: import.meta.env.VITE_APP_DESCRIPTION,
    url: import.meta.env.VITE_APP_URL,
    image: import.meta.env.VITE_APP_IMAGE || "",
  };

  if (import.meta.env.DEV) return children;

  return (
    <HelmetProvider>
      <Seo {...seoProps} />
      {children}
    </HelmetProvider>
  );
};
export default HelmetProviderFC;
