import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'One Love Initiative | Students Serving Community',
  description: 'A student-led initiative organizing donation drives and assembling essential kits for individuals and families in need across Charlotte, North Carolina.',
  openGraph: {
    "title": "One Love Initiative",
    "description": "Students serving Charlotte through community support.",
    "siteName": "One Love Initiative"
  },
};



const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
