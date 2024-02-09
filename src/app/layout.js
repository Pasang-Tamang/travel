import { Inter } from "next/font/google";
import "./styles.css";
import "./globals.css";

// import "@/styles/globals.css";
// import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Providers from "@/redux/Provider";

import "react-image-lightbox/style.css";
import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mission Summit Trek",
  description: "",
  image: "./Logo.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="npgg">
      <Head>
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-139720900-1"
        ></script>
        {/* <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> */}
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
          integrity="sha512-QAc08ipPd7ElgrEsKMj9mFi1LOYhEBBeusKfVSXktZSjlm5BIThey5q7IEYtZVixxC+lIN6CnSZCfI4s00Dq3w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script> 
        
                <script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.5/mobile-detect.min.js"></script>
        */}
      </Head>
      <body className={inter.className}>
        <Providers>
          <Header />
          <div>{children}</div>

          <Footer />
        </Providers>
        {/* // {children} */}
      </body>
    </html>
  );
}
