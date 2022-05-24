import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  const [reviews, getReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => getReviews(data));
  }, []);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold">Reviews</h1>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review) => (
          <div className="w-96 mx-4 bg-base-100 shadow-md my-4 p-6 rounded">
            <h1 className="text-2xl">{review.userName}</h1>
            <h4 className="text-lg">
              {review.review} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
            </h4>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
