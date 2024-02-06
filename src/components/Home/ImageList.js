// "use client";
import React, { useState } from "react";
//import OwlCarousel from "react-owl-carousel";
import Lightbox from "react-image-lightbox";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
const option = {
  margin: 4,
  responsiveClass: true,
  nav: true,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 1,
    },
  },
};
const ImageListm = ({ gallery }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      <OwlCarousel className="owl-theme  modal-img-slide" {...option}>
        {gallery?.map((source, index) => {
          return (
            <div className="modal-img" key={`modal_${index}`}>
              <img
                style={{
                  height: "400px",
                }}
                src={
                  "https://destination.missionsummittreks.com/" + source?.image
                }
                alt=""
                className="img-fluid"
              />
            </div>
          );
        })}
        {isViewerOpen && (
          <Lightbox
            // mainSrc={modalImage[currentImage]}
            onCloseRequest={() => setIsViewerOpen(false)}
          />
        )}
      </OwlCarousel>
    </>
  );
};

export default ImageListm;
