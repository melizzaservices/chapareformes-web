import { Inter, Playfair_Display } from "next/font/google";
import { generateLocalBusinessSchema } from "@/utils/seo";
import FloatingCTA from "@/components/FloatingCTA";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata = {
  title: "CHAPAREFORMES | Rénovation d'Excellence à Paris",
  description: "20 ans d'expertise en rénovation intérieure. Le prestige Haussmannien rencontre la précision moderne.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";
  const jsonLd = generateLocalBusinessSchema(locale as any);

  return (
    <html lang={locale} dir={dir}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} bg-background text-textPrimary font-sans antialiased selection:bg-brass selection:text-white`}>
        <main className="relative min-h-screen">
          {children}
        </main>
        <FloatingCTA locale={locale as any} />
      </body>
    </html>
  );
}
