// import HomePage from "@/components/HomePage";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("@/components/HomePage"), {
  ssr: true,
});
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch(`http://localhost:3000/api/getInfo`, {
    method: "GET",
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error("Failed to fetch metadata");
  }

  const data = await res.json();
  const metadata = data.metadata;

  return data.metadata

  return {
    title: metadata.title || "Default Title",
    description: metadata.description || "Default Description",
    icons: metadata.icons,
    openGraph: metadata.openGraph,
    twitter: metadata.twitter,
    appleWebApp: metadata.appleWebApp,
    manifest: metadata.manifest,
    robots: metadata.robots,
    themeColor: metadata.themeColor,
    viewport: metadata.viewport,
    alternates: metadata.alternates,
    verification: metadata.verification,
    referrer: metadata.referrer,
    colorScheme: metadata.colorScheme,
  };
}


export default function Home() {
  return (
    <HomePage />
  );
}
