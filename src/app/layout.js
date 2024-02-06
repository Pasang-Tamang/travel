import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/redux/Provider";

import "react-image-lightbox/style.css";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mission Summit Trek",
  description: "",
  image: "./Logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="npgg">
      <head>
        {/* <meta charset="utf-8" /> */}
        <link rel="icon" href="./Logo.png" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> */}
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          integrity="sha512-QAc08ipPd7ElgrEsKMj9mFi1LOYhEBBeusKfVSXktZSjlm5BIThey5q7IEYtZVixxC+lIN6CnSZCfI4s00Dq3w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.5/mobile-detect.min.js"></script>
      </head>
      <body className={inter.className}>
        {/* <Providers>
          <Header />
          <div>{children}</div>
          <Footer />
        </Providers> */}
        {children}
      </body>
    </html>
  );
}
