// import { BASE_URL } from "@/constants/env";
// import axios from "axios";
import { NextResponse } from "next/server";
import { Metadata } from "next";

export async function GET() {
  try {
    const metadata: Metadata = {
      title: "ohh yeah by fameer fuddi",
      description: "Your page description for SEO",

      icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
        shortcut: "/shortcut-icon.png",
        other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" }],
      },

      keywords: ["asdf", "qwer", "zxcv"],

      openGraph: {
        title: "Open Graph Title",
        description: "Open Graph description",
        url: "https://yourwebsite.com",
        siteName: "Your Website Name",
        images: [
          {
            url: "https://yourwebsite.com/og-image.jpg",
            width: 800,
            height: 600,
            alt: "OG Image Alt Text",
          },
        ],
        locale: "en_US",
        type: "website",
      },

      twitter: {
        card: "summary_large_image",
        title: "Twitter Card Title",
        description: "Twitter Card Description",
        images: ["https://yourwebsite.com/twitter-image.jpg"],
        creator: "@yourhandle",
      },

      appleWebApp: {
        capable: true,
        title: "Your Web App Title",
        statusBarStyle: "black-translucent",
      },

      manifest: "/site.webmanifest",

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          noimageindex: true,
          "max-snippet": -1,
        },
      },

      other: {
        "application/ld+json": JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Your Website",
        }),
        url: "https://yourwebsite.com",
      },
      themeColor: "#ffffff",

      viewport: "width=device-width, initial-scale=1",

      alternates: {
        canonical: "https://yourwebsite.com",
        languages: {
          "en-US": "https://yourwebsite.com/en",
          "es-ES": "https://yourwebsite.com/es",
        },
      },

      verification: {
        google: "google-site-verification-code",
        yahoo: "yahoo-site-verification-code",
        yandex: "yandex-site-verification-code",
        me: ["https://yourwebsite.com/me"],
      },

      referrer: "no-referrer-when-downgrade",

      // Color Scheme
      colorScheme: "light dark",
    };

    const cid = 6;
    const response = NextResponse.json(
      {
        cid,
        metadata,
      },
      { status: 200 }
    );

    // response.cookies.set(CidStorageKey, cid.toString(), {
    //   // path: "/",
    //   httpOnly: true,
    //   // secure: process.env.NODE_ENV === "production",
    //   // sameSite: "lax",
    //   maxAge: 60 * 60 * 24 * 7,
    // });
    return response;
    // const { data } = await axios.get(`${BASE_URL}/frontend_post_get`, {
    //   params: {},
    // });

    // if (data && data.statusCode === 200) {
    //   return NextResponse.json({ posts: data.lstPost || [] });
    // } else {
    //   return NextResponse.json({ error: "Failed to fetch data from the external API." }, { status: 500 });
    // }
  } catch (err) {
    console.error("Error fetching media news:", err);
    return NextResponse.json(err, { status: 500 });
  }
}
