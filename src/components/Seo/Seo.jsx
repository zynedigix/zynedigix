import React from "react";
import { Helmet } from "react-helmet-async";
import defaults from "../../config/seo";

export default function Seo({
  title,
  description,
  path = "/",
  image,
  extraLd = null,
}) {
  const metaTitle = title || defaults.title;
  const metaDescription = description || defaults.description;
  const metaImage = image || defaults.ogImage;
  const url = new URL(path, defaults.url).toString();

  const ldWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: metaTitle,
    description: metaDescription,
    url,
  };

  const ldOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ZyneDigix",
    url: defaults.url,
    logo: defaults.ogImage,
  };

  const ld = extraLd ? [ldWebPage, ldOrg, extraLd] : [ldWebPage, ldOrg];

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={defaults.keywords} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={metaImage} />
      <link rel="canonical" href={url} />

      <script type="application/ld+json">{JSON.stringify(ld)}</script>
    </Helmet>
  );
}
