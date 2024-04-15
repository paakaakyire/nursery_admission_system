import { Inter } from "next/font/google";
import "./globals.css";
// import { Footer, Navbar } from "./components";
import { UserProvider } from "@auth0/nextjs-auth0/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Delany academy",
  description: "creating a school admission portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          {/* <Navbar /> */}
          {children}
          {/* <Footer /> */}
        </body>
      </UserProvider>
    </html>
  );
}
