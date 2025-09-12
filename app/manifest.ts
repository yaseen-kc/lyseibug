import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Lyseibug",
        short_name: "Lyseibug",
        description:
            "Lyseibug builds SEO-friendly websites, mobile apps, and ERP systems—backed by proactive IT support.",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#111827",
    };
}


