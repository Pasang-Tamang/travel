import Link from "next/link";
import React, { lazy } from "react";

import Header from "@/components/header/Header";
import Feature from "@/components/Home/Feature";
import Banner from "@/components/Home/Banner";
import Service from "@/components/Home/Service";
import SliderComponent from "@/components/Home/Popular";
import Booking from "@/components/Home/Booking";
import Company from "@/components/Home/Company";
//import ClintReview from "@/components/Home/ClintReview";
import Suscribe from "@/components/Home/Suscribe";
import ScrollToTopButton from "@/components/utilities/ScrollTop";

async function fetchFeature() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/tours/featuredHolidays"
  );
  const response = await res.json();
  return response.data;
}

async function fetchPopular() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/tours/popular"
  );

  const response = await res.json();
  return response.data;
}
async function fetchClientReview() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/clientreviews"
  );
  const response = await res.json();
  return response.data;
}
async function fetchMeta() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/settings"
  );
  const response = await res.json();
  return response.data;
}

export default async function Home() {
  const featureTour = await fetchFeature();
  const popularTour = await fetchPopular();
  const clientReview = await fetchClientReview();
  const meta = await fetchMeta();
  //console.log("pops", popularTour);

  return (
    <main className="main-page">
      {/* <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="this is the home page" />
        <title>{meta?.meta_title}</title>
        <meta name="title" content={meta?.meta_title} />
        <meta name="keywords" content={meta?.meta_keyword} />
      </head> */}
      <Header />

      <Banner clintReview={clientReview} />
      <Service />
      <SliderComponent popularTour={popularTour} />

      <Feature featureTour={featureTour} popularTour={popularTour} />
      <Booking featureTour={featureTour} clintReview={clientReview} />
      <Company />
      {/* <ClintReview clintReview={clientReview} /> */}
      <Suscribe />
      <ScrollToTopButton />
    </main>
  );
}
