// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// process is available at runtime in Node where Vite runs, but
// TypeScript in this project may not include node types. Declare
// it to avoid type errors in this config file.
declare const process: any;

// Determine base URL for production builds.
// - When running in GitHub Actions the GITHUB_REPOSITORY env var is available
//   (format: owner/repo) so we can build with the correct repo subpath.
// - Locally and during dev we default to '/'.
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split("/")[1]
  : undefined;

const base = process.env.NODE_ENV === "production" && repoName
  ? `/${repoName}/`
  : "/";

export default defineConfig({
  plugins: [react()],
  base,
});
