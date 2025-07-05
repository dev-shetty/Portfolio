import { useState } from "react";
import type { CollectionEntry } from "astro:content";

interface SeriesListProps {
  posts: CollectionEntry<"blog">[];
  currentSlug: string;
}

export default function SeriesList({ posts, currentSlug }: SeriesListProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // If 4 or fewer posts, just show all of them
  if (posts.length <= 4) {
    return (
      <div className="space-y-2">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className={`block py-1 px-2 rounded transition-colors ${
              post.slug === currentSlug
                ? "bg-blue-500/20 text-blue-400"
                : "hover:bg-gray-800"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="flex-none w-6 h-6 grid place-items-center rounded-full bg-gray-800 text-sm">
                {post.data.series?.order}
              </span>
              <span className="line-clamp-1">{post.data.title}</span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  // For more than 4 posts, show first 2, expandable middle, and last 2
  const firstTwo = posts.slice(0, 2);
  const lastTwo = posts.slice(-2);
  const middle = posts.slice(2, -2);
  const isMiddlePostActive = middle.some((post) => post.slug === currentSlug);

  return (
    <div className="space-y-2">
      {/* First Two Posts */}
      {firstTwo.map((post) => (
        <a
          key={post.slug}
          href={`/blog/${post.slug}`}
          className={`block py-1 px-2 rounded transition-colors ${
            post.slug === currentSlug
              ? "bg-blue-500/20 text-blue-400"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="flex-none w-6 h-6 grid place-items-center rounded-full bg-gray-800 text-sm">
              {post.data.series?.order}
            </span>
            <span className="line-clamp-1">{post.data.title}</span>
          </div>
        </a>
      ))}

      {/* Middle Posts (Expandable) */}
      {middle.length > 0 && (
        <>
          <button
            className={`pl-8 transition-colors cursor-pointer w-full text-left ${
              isMiddlePostActive && !isExpanded
                ? "text-blue-400"
                : "text-gray-500 hover:text-gray-400"
            }`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <span className="text-xs">Hide {middle.length} parts</span>
            ) : (
              "..."
            )}
          </button>

          {isExpanded && (
            <div className="space-y-2">
              {middle.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`block py-1 px-2 rounded transition-colors ${
                    post.slug === currentSlug
                      ? "bg-blue-500/20 text-blue-400"
                      : "hover:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-none w-6 h-6 grid place-items-center rounded-full bg-gray-800 text-sm">
                      {post.data.series?.order}
                    </span>
                    <span className="line-clamp-1">{post.data.title}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </>
      )}

      {/* Last Two Posts */}
      {lastTwo.map((post) => (
        <a
          key={post.slug}
          href={`/blog/${post.slug}`}
          className={`block py-1 px-2 rounded transition-colors ${
            post.slug === currentSlug
              ? "bg-blue-500/20 text-blue-400"
              : "hover:bg-gray-800"
          }`}
        >
          <div className="flex items-center gap-3">
            <span className="flex-none w-6 h-6 grid place-items-center rounded-full bg-gray-800 text-sm">
              {post.data.series?.order}
            </span>
            <span className="line-clamp-1">{post.data.title}</span>
          </div>
        </a>
      ))}
    </div>
  );
}
