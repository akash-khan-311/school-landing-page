import Navbar from "@/components/Navbar/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import SEO from "@/components/SEO/Seo";
import Footer from "@/modules/Footer/Footer";
import ClientProvider from "@/provider/ClientProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body lang="en">
      <SEO />
      <ClientProvider>
        <Navbar />
        <main className={` antialiased`}>{children}</main>
        <ScrollToTop />
        <Footer />
      </ClientProvider>
    </body>
  );
}
