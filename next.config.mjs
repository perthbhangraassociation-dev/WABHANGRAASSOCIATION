const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "WABHANGRAASSOCIATION";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGitHubActions ? `/${repo}` : "",
  assetPrefix: isGitHubActions ? `/${repo}/` : ""
};

export default nextConfig;
