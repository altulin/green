import { TSeo } from "@/shared/types/seo";
import { FC } from "react";
import { Helmet } from "react-helmet-async";

export const Seo: FC<TSeo> = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <link
        rel="icon"
        type="image/png"
        href="/favicon-96x96.png"
        sizes="96x96"
      />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta property="og:url" content={`https://${url}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={url} />
      <meta property="twitter:url" content={`https://${url}/`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {import.meta.env.MODE === "production" && (
        <>
          {/* <script type="text/javascript">{mailCounter}</script>
          <noscript>{mailNoScript}</noscript>
          <script type="text/javascript">{mailRating}</script>

          <script type="text/javascript">{yaCounter}</script>
          <noscript>{yaNoScript}</noscript>

          <script
            src="//cdn.callibri.ru/callibri.js"
            type="text/javascript"
          ></script> */}
        </>
      )}
    </Helmet>
  );
};
