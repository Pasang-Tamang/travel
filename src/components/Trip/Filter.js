"use client";
import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter, useSearchParams } from "next/navigation";

const Filter = (props) => {
  const router = useRouter();
  const search = useSearchParams();
  const queryParams = new URLSearchParams(search);
  const activityquery = search.get("activity_id");
  const [check, setCheck] = useState(false);
  const [check1, setCheck1] = useState(false);
  const [filterParams, setFilterParams] = useState({
    activity_id: [],
    destination_id: [],
    date_id: [],
  });
  const [filterData, setFilterData] = useState([
    {
      activities: [
        {
          title: "Trekking",
          value: "1",
          checked: false,
        },
        {
          title: "Expedition",
          value: "2",
          checked: false,
        },
        {
          title: "Tour and Sight Seeing",
          value: "3",
          checked: false,
        },

        {
          title: "White Water Seeing",
          value: "4",
          checked: false,
        },

        {
          title: "Jungle Safari",
          value: "5",
          checked: false,
        },
        {
          title: "Bungee Jumping",
          value: "6",
          checked: false,
        },
      ],
      dates: [
        {
          title: "January",
          value: "1",
          checked: false,
        },
        {
          title: "February",
          value: "2",
          checked: false,
        },
        {
          title: "March",
          value: "3",
          checked: false,
        },
        {
          title: "April",
          value: "4",
          checked: false,
        },
        {
          title: "May",
          value: "5",
          checked: false,
        },
        {
          title: "June",
          value: "6",
          checked: false,
        },
        {
          title: "July",
          value: "7",
          checked: false,
        },
        {
          title: "August",
          value: "8",
          checked: false,
        },
        {
          title: "September",
          value: "9",
          checked: false,
        },
        {
          title: "October",
          value: "10",
          checked: false,
        },
        {
          title: "November",
          value: "11",
          checked: false,
        },
        {
          title: "December",
          value: "12",
          checked: false,
        },
      ],
      destinations: [
        {
          title: "Nepal",
          value: "2",
          checked: false,
        },
        {
          title: "Bhutan",
          value: "3",
          checked: false,
        },
        {
          title: "Tibet",
          value: "4",
          checked: false,
        },
        {
          title: "Kathmandu",
          value: "4",
          checked: false,
        },
        {
          title: "Pokhara",
          value: "5",
          checked: false,
        },
      ],
    },
  ]);

  const filterQueryString = (filterKey, filterValues) => {
    if (filterValues.length === 0) {
      return;
    }
    return `${filterKey}=${filterValues.join(",")}`;
  };

  const handleCheckBox = async (e, key) => {
    const { value, checked } = e.target;

    const updatedFilterData = [...filterData];

    // Find the activity object you want to update
    const activityIndex = updatedFilterData[0].activities.findIndex(
      (activity) => activity.value === value
    );

    // If activity found, update its checked property
    if (activityIndex !== -1) {
      updatedFilterData[0].activities[activityIndex] = {
        ...updatedFilterData[0].activities[activityIndex],
        checked: !updatedFilterData[0].activities[activityIndex].checked,
      };
    }

    // Update the state with the modified array
    setFilterData(updatedFilterData);
    setFilterParams((prev) => {
      return {
        ...prev,
        [key]: checked
          ? [...prev[key], value]
          : prev[key].filter((item) => item !== value),
      };
    });
    setCheck1(true);

    // let Npromise =  new Promise((resolve, reject) => {
    //   setFilterParams((prev) => {
    //     return {
    //       ...prev,
    //       [key]: checked
    //         ? [...prev[key], value]
    //         : prev[key].filter((item) => item !== value),
    //     };
    //   }, resolve(true));
    // });

    setFiltersData();
  };

  useEffect(() => {
    if (check1 == true) {
      setFiltersData();
    }
  }, [filterParams]);

  function setFiltersData() {
    const params = [];
    let a = filterParams;
    params.push(filterQueryString("activity_id", filterParams.activity_id));
    // params.push(filterQueryString("destination_id", a.destination_id));

    // params.push(filterQueryString("date_id", a.date_id));
    console.log("params", params);

    const queryString = params.filter(Boolean).join("&");
    console.log("queryString", queryString);
    const newUrl = `/trip?page=1${queryString ? "&" + queryString : ""}`;
    console.log("newUrl", newUrl);
    ("use server");
    props.filterActivities(queryString);
    router.push(newUrl);
  }

  function setFilterQuery(key, value) {
    setFilterParams((prev) => {
      let updatedValue;
      updatedValue = [...prev[key], value];
      return {
        ...prev,
        [key]: updatedValue ?? [],
      };
    });
  }

  useEffect(() => {
    if (activityquery?.length > 0 && check === false) {
      setFilterQuery("activity_id", activityquery);
      const updatedFilterData = [...filterData];
      activityquery.split(",").map((id) => {
        // Find the activity object you want to update
        const activityIndex = updatedFilterData[0].activities.findIndex(
          (activity) => activity.value === id
        );

        // If activity found, update its checked property
        if (activityIndex !== -1) {
          updatedFilterData[0].activities[activityIndex] = {
            ...updatedFilterData[0].activities[activityIndex],
            checked: true,
          };
        }
      });
      // Update the state with the modified array
      setFilterData(updatedFilterData);
      setCheck(true);
    }
  }, [activityquery]);

  // useEffect(() => {
  //   if (
  //     filterParams.activity_id.length > 0 ||
  //     filterParams.destination_id.length > 0 ||
  //     filterParams.date_id.length > 0
  //   ) {
  //     const params = [];
  //     params.push(filterQueryString("activity_id", filterParams.activity_id));
  //     params.push(
  //       filterQueryString("destination_id", filterParams.destination_id)
  //     );
  //     params.push(filterQueryString("date_id", filterParams.date_id));

  //     const queryString = params.filter(Boolean).join("&");
  //     console.log(params, "1query");

  //     const newUrl = `/trip?page=1${queryString ? "&" + queryString : ""}`;

  //     ("use server");
  //     props.filterActivities(queryString);
  //     router.push(newUrl);
  //   }
  // }, [
  //   filterParams.activity_id,
  //   filterParams.destination_id,
  //   filterParams.date_id,
  // ]);

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
              </div>
              <div className="mt-2">
                {filterData.map((data) => {
                  return (
                    <div key={data.activities}>
                      {data.activities.map((activity) => {
                        return (
                          <div key={activity.title} className="pb-2">
                            <Checkbox
                              checked={activity.checked}
                              value={activity.value}
                              onChange={(e) => handleCheckBox(e, "activity_id")}
                            />
                            <span>{activity.title}</span>
                          </div>
                        );
                      })}
                    </div>
                  );
                  // return data.activities.map((activity) => {
                  //   return (
                  //     <div key={activity.title} className="pb-2">
                  //       <Checkbox
                  //         value={activity.value}
                  //         onChange={(e) => handleCheckBox(e, "activity_id")}
                  //       />
                  //       <span>{activity.title}</span>
                  //     </div>
                  //   );
                  // });
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
                  return (
                    <div key={data.destinations}>
                      {data.destinations.map((destination) => {
                        return (
                          <div className="pb-2" key={destination.title}>
                            <Checkbox
                              value={destination.value}
                              onChange={(e) =>
                                handleCheckBox(e, "destination_id")
                              }
                            />
                            <span> {destination.title}</span>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  );
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
                  return (
                    <div key={data.dates}>
                      {data.dates.map((date) => {
                        return (
                          <div className="pb-2" key={date.title}>
                            <Checkbox
                              value={date.value}
                              onChange={(e) => handleCheckBox(e, "date_id")}
                            />
                            <span> {date.title}</span>
                            <br />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
