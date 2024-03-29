import { fetchClientReview } from "@/app/page";
import EverestTrek from "@/components/EverestTrek/EverestTrek";
import React from "react";
const url = process.env.url;
async function page({ params }) {
  const review = await fetchClientReview();

  const tripId = params.tripId;
  console.log(params, tripId, "********************** id");
  const res = await fetch(`${url}/api/tour/${tripId}`);
  const tour = await res.json();
  console.log(tour.id, "000000000000000000000000000000000000");

  return (
    <div>
      {" "}
      <EverestTrek
        review={review}
        tour={tour}
        tripId={tripId}
        tourId={tour.id}
      />
    </div>
  );
}

export default page;
