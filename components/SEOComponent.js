

export default function SEOComponent({ 
  title, 
  description, 
  keywords, 
  image = "/crm%20screen%20shot/Screenshot%20(505).png",
  url = "https://triostack.in",
  type = "website" 
}) {
  const siteName = "CRM Solutions";
  const fullTitle = `${title} | ${siteName}`;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": type === "article" ? "BlogPosting" : "WebSite",
          "name": siteName,
          "url": url,
          "description": description,
          "image": image,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          },
          "publisher": {
            "@type": "Organization",
            "name": siteName,
            "logo": {
              "@type": "ImageObject",
              "url": "https://triostack.in/trio-logo.png"
            }
          }
        })
      }}
    />
  );
}
