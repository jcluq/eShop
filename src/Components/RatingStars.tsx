import React from "react";
import fullstar from "../icons/star1.svg";
import emptystar from "../icons/star2.svg";

interface RatingStarsProps {
  rating: number;
}

export default function RatingStars(props: RatingStarsProps) {
  let starArray = new Array<any>(
    emptystar,
    emptystar,
    emptystar,
    emptystar,
    emptystar
  );
  const rating = Math.floor(props.rating);

  for (let i = 0; i < rating; i++) {
    starArray[i] = fullstar;
  }

  console.log(starArray);

  return (
    <div className="my-1 flex">
      {starArray.map((star) => {
        return <img src={star} width="13" />;
      })}
    </div>
  );
}
