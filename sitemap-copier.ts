import type { AstroIntegration } from "astro";
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

async function copyFiles(srcDir: string, destDir: string) {
  const files = await fs.readdir(srcDir);

  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    const stat = await fs.stat(srcPath);

    if (stat.isDirectory()) {
      await fs.mkdir(destPath, { recursive: true });
      await copyFiles(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

export function CopyFilesPlugin(): AstroIntegration {
  return {
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const distDir = fileURLToPath(dir.href);
        const staticDir = path.resolve(".vercel/output/static");

        await fs.mkdir(staticDir, { recursive: true });
        await copyFiles(distDir, staticDir);
      },
    },
    name: "copy-files",
  };
}
