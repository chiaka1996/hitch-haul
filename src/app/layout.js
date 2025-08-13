import React from 'react';
import { Public_Sans } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "500", "700"],
//   variable: "--font-poppins", // we will hook this into Tailwind
// });

export const metadata = {
  title: "Hitch and Haul Logistics service",
  description: "Hitch and Haul Logistic Service",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Material Symbols (Outlined) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${publicSans.variable}  antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
