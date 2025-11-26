import { ImageResponse } from "@vercel/og"
import { getCollection, type CollectionEntry } from "astro:content"
import { createElement } from "react"

export async function getStaticPaths() {
  const posts = await getCollection("blog")
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post },
  }))
}

interface Props {
  post: CollectionEntry<"blog">
}

export async function GET({ props }: { props: Props }) {
  const { post } = props
  const hasCoverImage = !!post.data.coverImage

  return new ImageResponse(
    createElement(
      "div",
      {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
        },
      },
      [
        // Background image if exists
        hasCoverImage &&
          createElement("img", {
            src: post.data.coverImage,
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            },
          }),
        // Overlay
        hasCoverImage &&
          createElement("div", {
            style: {
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom, rgba(15, 17, 23, 0.95), rgba(15, 17, 23, 0.80))",
            },
          }),
        // Content
        createElement(
          "div",
          {
            style: {
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              backgroundColor: hasCoverImage ? "transparent" : "#0f1117",
              padding: "60px 80px",
              fontFamily: "system-ui, sans-serif",
              position: "relative",
              zIndex: 1,
            },
          },
          [
            createElement(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  width: "100%",
                },
              },
              [
                createElement(
                  "div",
                  {
                    style: {
                      fontSize: "72px",
                      fontWeight: "bold",
                      color: "#ffffff",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    },
                  },
                  post.data.title
                ),
                createElement(
                  "div",
                  {
                    style: {
                      fontSize: "36px",
                      color: "#a1a1aa",
                      lineHeight: 1.4,
                      marginTop: "12px",
                    },
                  },
                  post.data.description
                ),
              ]
            ),
            createElement(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  marginTop: "auto",
                },
              },
              [
                createElement(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    },
                  },
                  [
                    createElement("img", {
                      src: "https://dev.shetty.me/panda.png",
                      width: 48,
                      height: 48,
                      style: {
                        borderRadius: "50%",
                      },
                    }),
                    createElement(
                      "div",
                      {
                        style: {
                          fontSize: "32px",
                          fontWeight: 600,
                          color: "#ffffff",
                        },
                      },
                      "Deveesh Shetty"
                    ),
                  ]
                ),
                createElement(
                  "div",
                  {
                    style: {
                      fontSize: "24px",
                      color: "#71717a",
                    },
                  },
                  "dev.shetty.me"
                ),
              ]
            ),
          ]
        ),
      ].filter(Boolean)
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
