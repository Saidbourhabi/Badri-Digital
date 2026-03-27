import { Helmet } from "react-helmet-async";

const SEO = ({
title,
description,
keywords,
url,
image,
type = "website"
}) => {
return (
<Helmet>

<title>{title}</title>

<meta name="description" content={description} />
<meta name="keywords" content={keywords} />
<meta name="robots" content="index, follow" />

<link rel="canonical" href={url} />

<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={url} />
<meta property="og:image" content={image} />

<meta name="twitter:card" content="summary_large_image" />

</Helmet>
);
};

export default SEO;