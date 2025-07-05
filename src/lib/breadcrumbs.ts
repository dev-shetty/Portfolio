interface BreadcrumbProps {
  currentPath: string;
  title?: string;
  isArticle?: boolean;
}

export const generateBreadcrumbs = ({
  currentPath,
  title,
  isArticle,
}: BreadcrumbProps) => {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "About Me",
      item: "https://deveesh.vercel.app",
    },
  ];

  if (currentPath.includes("/art-gallery")) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Art Gallery",
      item: "https://deveesh.vercel.app/art-gallery",
    });
  } else if (currentPath.includes("/blog")) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://deveesh.vercel.app/blog",
    });

    // Add blog post title if it's a blog post
    if (isArticle && title) {
      items.push({
        "@type": "ListItem",
        position: 3,
        name: title.split(" | ")[0], // Get just the blog title
        item: `https://deveesh.vercel.app${currentPath}`,
      });
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
};
