/* eslint-disable no-unused-vars */
"use client";
import React from "react";
//import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ProfileItem from "./ProfileItem";

const ClintReview = ({ clintReview }) => {
  const option = {
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: true,
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
        items: 3,
      },
    },
  };
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prevCount) => {
  //       if (prevCount >= 60) {
  //         clearInterval(interval);
  //         return prevCount;
  //       }
  //       return prevCount + 1;
  //     });
  //   }, 3000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  //const maxLength = 130;
  // const toggleTruncate = (index) => {
  //   setIsTruncated(!isTruncated);
  //   console.log("toggled!", index);
  // };

  return (
    <>
      <section className="slide-clint mt-5">
        <Container className="mt-5">
          <h1 className="text-center py-5">
            <span>Our happy</span> Clients
          </h1>

          <OwlCarousel className="owl-theme clint-review-carsouel" {...option}>
            {console.log(clintReview, "reviewss")}
            {clintReview?.map((clint) => (
              <ProfileItem {...clint} />
            ))}
          </OwlCarousel>
        </Container>
      </section>
    </>
  );
};

export default ClintReview;
