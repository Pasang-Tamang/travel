"use client";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useState, useEffect } from "react";
// import Slider from 'react-slick'
import OwlCarousel from "react-owl-carousel";
import { Container, Row, Col } from "react-bootstrap";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import FilterOutlinedIcon from "@mui/icons-material/FilterOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Link from "next/link";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
// import axios from 'axios'
import StarIcon from "@mui/icons-material/Star";

// import ReactImageMagnify from 'react-image-magnify'
import ImageList from "./ImageList";
import Vedio from "./Vedio";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PopUpModel from "../reusableComponents/PopUpModel";
import $ from "jquery";
const SliderComponent = ({ popularTour }) => {
  // console.log("dsdasd", popularTour);
  const modalImage = [
    {
      img: "https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg",
    },
    {
      img: "https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg",
    },
    {
      img: "https://www.switchbacktravel.com/sites/default/files/images/articles/Mt.%20Everest%20Nepal.jpg",
    },
  ];

  // const [isOpen, setIsOpen] = useState(false)

  const [show, setShow] = useState(false);
  const [showvideo, setShowVideo] = useState(false);
  // const [modal, setModal] = useState('image')
  const [url, setUrl] = useState(null);
  const [galleries, setGalleries] = useState(null);
  const handleClose = () => setShow(false);

  // popup logic
  const handleShow = (gallery) => {
    setShow(true);
    setGalleries(gallery);
  };

  const handleShowVideo = (index) => {
    setShowVideo(true);
    setUrl(index);
  };

  const handleCloseVideo = () => setShowVideo(false);
  const options = {
    margin: 15,
    responsiveClass: true,
    nav: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
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
        items: 2,
      },
    },
  };
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount >= 2) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // console.log("popular", popularTour);

  return (
    <>
      <PopUpModel
        show={showvideo}
        handleclose={handleCloseVideo}
        body={<Vedio video={popularTour} url={url} />}
        className="img-popup"
      />
      <PopUpModel
        show={show}
        handleclose={handleClose}
        header="Trip Images"
        body={<ImageList popularTour={modalImage} gallery={galleries} />}
        className="img-popup"
      />

      <section className="slide">
        <Container className="mt-5">
          <h1 className="text-center mb-2 fp-bold">Most Popular Trekking</h1>

          <OwlCarousel className="owl-theme top-place-carsouel" {...options}>
            {/* {console.log("owlpop", popularTour, "owlpop")} */}
            {popularTour?.map((popular, index) => {
              return (
                <div className="top-place" key={`popular_${index}`}>
                  {console.log(popular, "index")}
                  <div className="img-box">
                    <Link href={`/trip/${popular.slug}`}>
                      <img
                        src={
                          "https://destination.missionsummittreks.com/" +
                          popular?.image
                        }
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </Link>
                    <div className="top-btn">
                      <StarIcon className="me-1" /> BEST PRICE
                    </div>

                    <div className="over-box">
                      <div className="over-box-content">
                        <span className="me-5">
                          <i
                            class="fa-regular fa-clock"
                            style={{ marginRight: "3px" }}
                          ></i>
                          {Math.ceil(
                            (new Date(popular?.departures[0]?.end_date) -
                              new Date(popular?.departures[0]?.start_date)) /
                              (1000 * 60 * 60 * 24) +
                              1
                          )}{" "}
                          days
                        </span>{" "}
                        <span>
                          <i
                            class="fa-solid fa-dollar-sign"
                            style={{ marginRight: "1px" }}
                          ></i>
                          {popular?.current_price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="content">
                    <Link href={`/trip/${popular.slug}`}>
                      <h3 className="text-center ">{popular?.title}</h3>
                    </Link>
                    <Row className="mt-4">
                      <Col xs={8} md={8} lg={6}>
                        <Link href={`/trip/${popular.slug}`}>
                          <button className="rd-btn ms-2">
                            <span>Read Details</span>
                            <EastOutlinedIcon className="arrow ms-3" />
                          </button>
                        </Link>
                      </Col>
                      <Col xs={4} md={4} lg={6}>
                        <div className="top-palce-icon d-flex align-items-center justify-content-end mt-3 me-3 ">
                          <div
                            className="box-cover"
                            onClick={() => handleShow(popular?.tourgallaries)}
                          >
                            {" "}
                            <FilterOutlinedIcon className="icon-top" />
                            <div className="box">
                              {popular?.tourgallaries?.length}
                            </div>
                          </div>
                          {popular.video_url &&
                            popular.video_url.length > 0 && (
                              <div
                                onClick={() =>
                                  handleShowVideo(popular?.video_url)
                                }
                              >
                                <VideocamOutlinedIcon className="icon-top ms-4" />
                              </div>
                            )}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              );
            })}
          </OwlCarousel>
        </Container>
      </section>
    </>
  );
};

export default SliderComponent;
