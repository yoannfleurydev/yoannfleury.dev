import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
  }));
}

export const GET: APIRoute = async function get({ params }) {
  const post = await getEntry("blog", params.slug ?? "");

  const sonoData = await fs.readFile("./public/fonts/sono/Sono-Regular.ttf");

  const svg = await satori(
    // @ts-ignore Satori want ReactNode when react is installed.
    {
      type: "div",
      props: {
        children: [
          {
            type: "p",
            props: {
              children: post?.data.title,
            },
          },
          {
            type: "p",
            props: {
              children: "Yoann Fleury",
              style: {
                color: "#fafcfc",
                fontSize: "2.5rem",
                position: "absolute",
                bottom: 0,
              },
            },
          },
        ],
        style: {
          height: "100vh",
          width: "100vw",
          backgroundColor: "#171717",
          color: "#fbbcd1",
          padding: "2rem",
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          fontSize: "4rem",
          justifyContent: "center",
          alignItems: "center",
        },
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Sono",
          data: sonoData,
          style: "normal",
        },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
