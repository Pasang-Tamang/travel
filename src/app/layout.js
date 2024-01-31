import { Inter } from "next/font/google";
import "../styles/globals.css";
import Providers from "@/redux/Provider";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-image-lightbox/style.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mission Summit Trek",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <link rel="icon" href="./Logo.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </head>
      <body className={inter.className}>
        <Providers>
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
