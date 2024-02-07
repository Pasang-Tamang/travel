import Filter from "@/components/Trip/Filter";
import TripCatalog from "@/components/Trip/TripCatalog";
import React from "react";
import { Container } from "react-bootstrap";

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
      <Container>
        <div className="expedition">
          <div className="filter-box no-tablet">
            <Filter />
          </div>
          <div className="triplist">
            <TripCatalog tours={tours} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default page;
