import Header from "@/components/Header/Header";
import Loading from "@/components/Shared/Loading";
import { getDocuments } from "@/lib/doc";
import localFont from "next/font/local";
import { Suspense } from "react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "DocuCraft - A documentation website by Protocol",
  description: "A documentation website by Protocol",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments()

  console.log("all", allDocuments)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-full lg:ml-72 xl:ml-80">
          <Suspense fallback={<Loading />}>
            <Header docs={allDocuments} />

            <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
              <main className="flex-auto py-16">
                <article className="prose dark:prose-invert">
                  <div className="absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden">
                    <div
                      className="absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]"
                    >
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100"
                      ></div>
                    </div>
                  </div>
                </article>
                {children}
              </main>
            </div>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
