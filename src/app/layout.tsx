import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";


export const metadata: Metadata = {
  title: "오지랖",
  description: "오지랖",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" 
          crossOrigin="anonymous" 
        />
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
