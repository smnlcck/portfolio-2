import type { NextConfig } from "next";

// When building inside GitHub Actions for GitHub Pages, the site is served
// from https://<user>.github.io/<repo>/ rather than the domain root, so we
// need to prefix all paths/assets with the repo name. Locally (npm run dev)
// and on Vercel this env var isn't set, so basePath/assetPrefix stay empty.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
let basePath = "";
let assetPrefix = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
