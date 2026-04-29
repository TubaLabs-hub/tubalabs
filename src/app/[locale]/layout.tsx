import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tuba Labs | code that grows",
    template: "%s | Tuba Labs"
  },
  description: "Software House profesional yang membangun solusi bisnis digital skalabel dan inovatif untuk Enterprise dan UMKM.",
  keywords: ["Software House", "Web Development", "Mobile App", "AI Solutions", "Tuba Labs", "Indonesia", "Enterprise Solutions"],
  authors: [{ name: "Tuba Labs Team" }],
  creator: "Tuba Labs",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://tubalabs.com",
    title: "Tuba Labs | code that grows",
    description: "Membangun sistem digital yang tidak hanya berfungsi, tetapi juga berkembang seiring dengan kebutuhan bisnis Anda.",
    siteName: "Tuba Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuba Labs | code that grows",
    description: "Membangun sistem digital yang tidak hanya berfungsi, tetapi juga berkembang.",
    creator: "@tubalabs",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const locales = ['en', 'id'];

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${inter.variable} dark antialiased`}
    >
      <body className="min-h-screen bg-primary-navy text-white selection:bg-teal-cyan/30 selection:text-teal-cyan">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
