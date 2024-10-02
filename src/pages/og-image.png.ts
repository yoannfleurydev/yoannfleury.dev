import fs from "fs/promises";
import satori from "satori";
import sharp from "sharp";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post,
  }));
}

export const GET: APIRoute = async function get() {
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
              children: "Yoann Fleury - Web Developer",
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
          flexDirection: "column",
          lineHeight: 0,
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
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      "Content-Type": "image/png",
    },
  });
};
