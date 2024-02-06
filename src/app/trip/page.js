import Filter from "@/components/Trip/Filter";
import TripCatalog from "@/components/Trip/TripCatalog";
import React from "react";

async function getToursData() {
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/tours/list"
  );
  const response = await res.json();
  //console.log(response.data, "repppp");
  return response.data;
}

async function page() {
  const tours = await getToursData();
  return (
    <div>
      <Filter />
      <TripCatalog tours={tours} />
    </div>
  );
}

export default page;
