"use client";
import React from "react";
import ReactStars from "react-rating-stars-component";

import { useState } from "react";

const ProfileItem = (props) => {
  const [isTruncated, setIsTruncated] = useState(true);
  const maxLength = 130;
  return (
    <div>
      <div className="clint-box">
        <div className="clint- d-flex">
          {/*
                      <div className="clint-img">
                        <img
                          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80"
                          className="img-fluid"
                          alt=""
                          loading="lazy"
                        />
                      </div>
                     */}
          <div className="clint-detail ms-2 mt-3">
            <h3>{props.name}</h3>
            <span>{props.country_name}</span>

            {props.star_rating > 0 && (
              <ReactStars
                classNames="custom-stars"
                edit={false}
                color="gray"
                activeColor="#ffd700"
                value={props.star_rating}
                count={props.star_rating}
                isHalf={true}
                size={window.innerWidth < 600 ? 20 : 20}
              />
            )}
          </div>
        </div>
        {isTruncated ? (
          <p>{`${props.description?.slice(0, maxLength)}...`}</p>
        ) : (
          <p>{props.description}</p>
        )}
        <button
          className="review-btn"
          onClick={() => setIsTruncated((previous) => !previous)}
        >
          {isTruncated ? "Read More" : "Show Less"}
        </button>
      </div>
    </div>
  );
};

export default ProfileItem;
