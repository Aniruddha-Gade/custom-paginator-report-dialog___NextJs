import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Report Dialog",
  description: "Generated by create next app",
  icons: {
    icon: '/assets/icons/logo.png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={metadata.icons.icon} />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
