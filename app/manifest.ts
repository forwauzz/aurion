import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aurion",
    short_name: "Aurion",
    description: "Clinical AI documentation platform",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F3A",
    theme_color: "#0B1F3A",
    icons: [
      {
        src: "/icon-192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
