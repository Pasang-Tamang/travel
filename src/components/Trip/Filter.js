import { Checkbox } from "@mui/material";
import React from "react";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Filter = () => {
  const filterData = [
    {
      activities: [
        {
          title: "Trekking",
          value: "1",
        },
        {
          title: "Expedition",
          value: "2",
        },
        {
          title: "Tour and Sight Seeing",
          value: "3",
        },

        {
          title: "White Water Seeing",
          value: "4",
        },

        {
          title: "Jungle Safari",
          value: "5",
        },
        {
          title: "Bungee Jumping",
          value: "6",
        },
      ],
      dates: [
        {
          title: "January",
          value: "1",
        },
        {
          title: "February",
          value: "2",
        },
        {
          title: "March",
          value: "3",
        },
        {
          title: "April",
          value: "4",
        },
        {
          title: "May",
          value: "5",
        },
        {
          title: "June",
          value: "6",
        },
        {
          title: "July",
          value: "7",
        },
        {
          title: "August",
          value: "8",
        },
        {
          title: "September",
          value: "9",
        },
        {
          title: "October",
          value: "10",
        },
        {
          title: "November",
          value: "11",
        },
        {
          title: "December",
          value: "12",
        },
      ],
      destinations: [
        {
          title: "Nepal",
          value: "1",
        },
        {
          title: "Bhutan",
          value: "2",
        },
        {
          title: "Tibet",
          value: "3",
        },
        {
          title: "Kathmandu",
          value: "4",
        },
        {
          title: "Pokhara",
          value: "5",
        },
      ],
    },
  ];
  return (
    <>
      <div className="filter-title">
        <h1>Trip Filter</h1>
      </div>

      <div>
        <div className="filter-container mt-4">
          <div className="check-box activities">
            <div className="desktop-filter mb-1">
              <div className="spesifice-date mb-2">
                <div className="d-flex align-items-center ">
                  <DirectionsBikeIcon className="me-2" />{" "}
                  <h6>Filter By Activities</h6>
                </div>

                <div className="mt-2">
                  {filterData.map((data) => {
                    return data.activities.map((activity) => {
                      return (
                        <div key={activity.title}>
                          <Checkbox />
                          <span>{activity.title}</span>
                        </div>
                      );
                    });
                  })}
                </div>
                <div className="mt-2">
                  <div className="spesifice-date mb-2">
                    {/* <CalendarMonthIcon className="date" />{' '} */}
                    {/* <span>Select specific Date</span> */}
                    <div className="d-flex align-items-center ">
                      <FmdGoodIcon className="me-2" />{" "}
                      <h6>Filter By Destination</h6>
                    </div>
                  </div>
                  {filterData.map((data) => {
                    return data.destinations.map((destination) => {
                      return (
                        <>
                          <Checkbox />
                          <span> {destination.title}</span>
                          <br />
                        </>
                      );
                    });
                  })}
                </div>
                <div className="mt-2">
                  <div className="spesifice-date mb-2">
                    {/* <CalendarMonthIcon className="date" />{' '} */}
                    {/* <span>Select specific Date</span> */}
                    <div className="d-flex align-items-center ">
                      <CalendarMonthIcon className="me-2" />
                      <h6>Filter By Month</h6>
                    </div>
                  </div>
                  {filterData.map((data) => {
                    return data.dates.map((date) => {
                      return (
                        <>
                          <Checkbox />
                          <span> {date.title}</span>
                          <br />
                        </>
                      );
                    });
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
