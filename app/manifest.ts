import type { MetadataRoute } from "next"
import { siteDescription } from "@/lib/seo"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SNS Education — Student Next Step",
    short_name: "SNS Education",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f9f6ef",
    theme_color: "#1f4d3e",
    lang: "pt",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  }
}
