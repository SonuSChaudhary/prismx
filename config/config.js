import { defineConfig } from "dumi";

export default defineConfig({
  sitemap: {
    hostname: "https://prismx.io",
  },
  hash: true,
  title: "Prism X / Prism X · Individual Soldier Infiltration Platform",
  mode: "site",
  logo: "/static/scan.png",
  runtimePublicPath: true,
  favicon: "/static/scan.svg",
  exportStatic: {},
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
  mfsu: {},
});
