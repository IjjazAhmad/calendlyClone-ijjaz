"use client"
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./Providers";
import { Provider } from "react-redux";
import store from "@/store/store";
const inter = Inter({ subsets: ["latin"] });
// export const metadata: Metadata = {
//   title: "Calendly Next App",
//   description: "meeting schedule app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider >
        <Provider store={store}>
          {children}
          <Toaster />
        </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}
