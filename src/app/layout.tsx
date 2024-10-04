// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SetCidClientSide from "@/components/SetCidClientSide";
import Header from "@/components/Header";
import { MenuProvider } from "@/context/MenuContext";
import { MediaNewsProvider } from "@/context/MediaNewsContext";
import { ConfigDetailsProvider } from "@/context/ConfigDetailsContext";
import { ContactDetailsProvider } from "@/context/ContactDetailsContext";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export async function generateMetadata(): Promise<Metadata> {
//   const res = await fetch(`http://localhost:3000/api/getInfo`, {
//     method: "GET",
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch metadata");
//   }

//   const data = await res.json();
//   const metadata = data.metadata;

//   // const staticInfoPath = path.join(process.cwd(), "src/static.info.ts");

//   // // Update static.info.ts with the new CID
//   // const staticInfoContent = `export const cid = ${data.cid};`;

//   // try {
//   //   // Write the cid to static.info.ts
//   //   fs.writeFileSync(staticInfoPath, staticInfoContent, { encoding: "utf8" });
//   //   console.log("cid written to static.info.ts successfully!");
//   // } catch (error) {
//   //   console.error("Failed to write cid to static.info.ts:", error);
//   // }


//   return data.metadata

//   return {
//     title: metadata.title || "Default Title",
//     description: metadata.description || "Default Description",
//     icons: metadata.icons,
//     openGraph: metadata.openGraph,
//     twitter: metadata.twitter,
//     appleWebApp: metadata.appleWebApp,
//     manifest: metadata.manifest,
//     robots: metadata.robots,
//     themeColor: metadata.themeColor,
//     viewport: metadata.viewport,
//     alternates: metadata.alternates,
//     verification: metadata.verification,
//     referrer: metadata.referrer,
//     colorScheme: metadata.colorScheme,
//   };
// }

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res = await fetch(`http://localhost:3000/api/getInfo`, {
    method: "GET",
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error("Failed to fetch metadata");
  }
  const data = await res.json();
  const cid = data.cid;
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
      </head>
      <body
        className={`${inter.className} flex flex-col min-h-screen`}
      >
        <ConfigDetailsProvider>
          <ContactDetailsProvider >
            <MenuProvider>
              <MediaNewsProvider>
                <SetCidClientSide cid={cid} />
                <Header />
                {children}
                <Footer />
              </MediaNewsProvider>
            </MenuProvider>
          </ContactDetailsProvider>
        </ConfigDetailsProvider>
      </body>
    </html>
  );
}
