import EverestTrek from "@/components/EverestTrek/EverestTrek";
import React from "react";

async function page({ params }) {
  const tripId = params.tripId;
  //console.log(tripId, "myid");
  const res = await fetch(
    "https://destination.missionsummittreks.com/api/tour/" + tripId
  );
  const tour = await res.json();
  //console.log(tour, "000000000000000000000000000000000000");

  return (
    <div>
      {" "}
      <EverestTrek tour={tour} tripId={tripId} />
    </div>
  );
}

export default page;
