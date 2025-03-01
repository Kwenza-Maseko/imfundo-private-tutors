import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppPopup from "@/components/WhatsappPopUp";

export const metadata: Metadata = {
  title: "Imfundo Private Tutors",
  description: "Learning App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-[190px]">
          {children}
        </div>
        <Footer />

        <div className="fixed bottom-[30px] right-8 z-[999]">
          <WhatsAppPopup/>
        </div>
      </body>
    </html>
  );
}
