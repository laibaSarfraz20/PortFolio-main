import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Nav from "./Components/Nav";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Laiba Sarfraz | Full Stack Developer & Web Portfolio",
  description:
    "Explore Laiba Sarfraz’s portfolio, featuring cutting-edge full-stack web development projects built with modern technologies",
  keywords: [
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Software Engineer Portfolio",
  ],
  creator: "Laiba Sarfraz",
 
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
