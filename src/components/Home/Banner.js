"use client";
import React, { useState, useEffect } from "react";
import { Col, Row, Carousel } from "react-bootstrap";

import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import DatePickerComponent from "../utilities/DatePicker";
import { motion } from "framer-motion";
import SelecteComponent from "../utilities/Selecte";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useDispatch } from "react-redux";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
// import OwlCarousel from 'react-owl-carousel'

import axios from "axios";
import { useRouter } from "next/navigation";
import { tourSearch } from "@/redux/slices/slice";

// const options = [
//   { value: 'Pokhara', label: 'Pokhara' },
//   { value: 'Mustang', label: 'ustang' },
//   { value: 'Manag', label: ' Manag' },
//   { value: 'Chitwan', label: 'Chitwan' },
//   { value: 'Bardiya ', label: 'Bardiya ' },
// ]

const Banner = (clintReview) => {
  const router = useRouter();
  const [search, setSearch] = useState();
  const [banner, setBanner] = useState();
  const [date, setDate] = useState();
  const [selectPlace, setPlace] = useState();
  const [activity, setActivity] = useState();

  // Handeling destination and activity
  const handleSelect = (e) => {
    setPlace(e.value);
  };
  const handleSelectActivity = (e) => {
    setActivity(e.value);
  };

  const fetchSearch = () => {
    axios
      .get("https://destination.missionsummittreks.com/api/searches")
      .then(({ data }) => {
        setSearch(data);
      });
  };

  const fetchBanner = async () => {
    try {
      const response = await axios.get(
        "https://destination.missionsummittreks.com/api/sliders"
      );
      setBanner(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDate = (e) => {
    setDate(e.getMonth());
  };

  // dispatching fetchSearch and search banner
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSearch();
    fetchBanner();
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();

    dispatch(tourSearch({ selectPlace, activity }));
    router.push("/search");
  };

  //******************************** Try to search *******************
  const [destination, setDestination] = useState();

  return (
    <>
      <div className="banner">
        <Carousel controls={true} interval={1500}>
          {banner?.map((source, index) => {
            return (
              <Carousel.Item key={index}>
                <div className="banner-img">
                  <img src={source?.image} alt="" className="img-fluid" />
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>

        <div className="container">
          <div className="banner-title">
            <motion.h1
              initial={{ opacity: 0, translateX: -600 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 1 }}
            >
              Your Journey Begins Here
            </motion.h1>
          </div>
          <div className="no-mobile no-tablet" style={{ width: "80vw" }}>
            <motion.div className="trip">
              <form action="" onSubmit={searchHandler}>
                <Row className="gy-2">
                  <Col xs={12} md={4} lg={4}>
                    <div className="d-flex">
                      <NearMeOutlinedIcon className="left-icon" />{" "}
                      <p>Where are you going?</p>
                    </div>
                    <div className="">
                      <SelecteComponent
                        options={search?.destinations}
                        onchange={handleSelect}
                      />
                    </div>
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <div className="d-flex">
                      <LocalActivityOutlinedIcon className="left-icon" />
                      <p>Activity Types</p>
                    </div>
                    <SelecteComponent
                      onchange={handleSelectActivity}
                      options={search?.activities}
                    />
                  </Col>
                  <Col xs={12} md={3} lg={3}>
                    <div className="d-flex ">
                      <CalendarMonthOutlinedIcon className="left-icon" />
                      <p>Trip Start</p>
                    </div>
                    <DatePickerComponent
                      Icon={<AccessTimeIcon className="month" />}
                      name="date"
                      placeholderText="Start date"
                      selected={date}
                      onChange={handleDate}
                    />
                  </Col>

                  <Col xs={5} md={2} lg={2} className="text-end">
                    <Link href={"/triplist"}>
                      <div className="d-flex align-items-center justify-content-center">
                        <button type="submit" className="search-trip">
                          <Link
                            href={"/triplist"}
                            state={{
                              activityId: activity,
                              destination: selectPlace,
                              searchInfo: search,
                              searchDate: date,
                            }}
                          >
                            <div className="d-flex align-items-center jutify-content-center">
                              <Link
                                href={"/triplist"}
                                state={{
                                  activityId: activity,
                                  destination: selectPlace,
                                  searchInfo: search,
                                  searchDate: date,
                                }}
                              >
                                <SearchIcon className="seach-icon" />
                              </Link>{" "}
                              <p>SEARCH</p>
                            </div>
                          </Link>
                        </button>
                      </div>
                    </Link>
                  </Col>
                </Row>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
