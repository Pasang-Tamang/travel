import Link from "next/link";
import React, { lazy } from "react";

import Feature from "@/components/Home/Feature";
import Banner from "@/components/Home/Banner";
import Service from "@/components/Home/Service";
import SliderComponent from "@/components/Home/Popular";
import Booking from "@/components/Home/Booking";
import Company from "@/components/Home/Company";
//import ClintReview from "@/components/Home/ClintReview";
import Suscribe from "@/components/Home/Suscribe";
import ScrollToTopButton from "@/components/utilities/ScrollTop";
import Top from "@/components/Home/Top";
import ClintReview from "@/components/Home/ClintReview";

async function fetchSearch() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/searches"
  );
  const response = res.json();
  return response;
}

async function fetchBanner() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/sliders"
  );

  const response = res.json();
  return response;
}
async function fetchFeature() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/tours/featuredHolidays",
    "utf-8"
  );
  const response = await res.json();
  return response.data;
}

async function fetchPopular() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/tours/popular",
    { cache: "no-store" }
  );

  const response = await res.json();

  return response.data;
}
async function fetchClientReview() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/clientreviews"
  );
  const response = await res.json();

  return response;
}
async function fetchMeta() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/settings"
  );
  const response = await res.json();
  return response.data;
}

async function fetchTops() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/topdestinations"
  );

  const response = await res.json();
  // console.log("destinationsss",  response);
  return response;
}

export default async function Home() {
  const search = await fetchSearch();
  const banner = await fetchBanner();
  const featureTour = await fetchFeature();
  const popularTour = await fetchPopular();
  const clientReview = await fetchClientReview();
  const meta = await fetchMeta();
  const destination = await fetchTops();

  //console.log("banner", banner, "search", search);
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

      <Banner banner={banner} search={search} />
      <Service />
      <SliderComponent popularTour={popularTour} />

      <Feature featureTour={featureTour} />
      <Booking />
      <Company />

      <Top destination={destination} />
      <ClintReview clintReview={clientReview} />
      <Suscribe />
      <ScrollToTopButton />
    </main>
  );
}
