import { redirect } from "next/navigation";
import HomeWrapper from "./components/HomeWrapper";

export const metadata = {
  title: "NARTS Foundation - Culture, Art and Community",
  description:
    "NARTS Foundation promotes culture as a collective act of transformation. We connect art, identity, community, and the environment through festivals, residencies, workshops, and collaborative projects.",
  icons: {
    icon: [
      { url: "/favicon192.webp", sizes: "192x192" },
      { url: "/favicon32.webp", sizes: "32x32" },
    ],
    apple: "/favicon192.webp",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "NARTS Foundation - Culture, Art and Community",
    description:
      "We promote culture as a collective act of transformation. We create inclusive co-creation spaces alongside artists, communities, and cultural agents in Miami and beyond.",
    url: "https://www.nartsfoundation.org/",
    siteName: "NARTS Foundation",
    images: [
      {
        url: "https://www.nartsfoundation.org/og-image.jpg", // change to the actual OG image
        width: 1200,
        height: 630,
        alt: "NARTS Foundation - Culture, Art and Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NARTS Foundation - Culture, Art and Community",
    description:
      "NARTS Foundation promotes culture as a collective act of transformation, connecting art, identity, community, and the environment.",
    images: ["https://www.nartsfoundation.org/og-image.jpg"], // same image as in OG
  },
  alternates: {
    canonical: "https://www.nartsfoundation.org/",
  },
};

export default function HomePage() {
  const isMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "false";

  if (isMaintenance) {
    redirect("/mantenimiento");
  }

  return <HomeWrapper />;
}