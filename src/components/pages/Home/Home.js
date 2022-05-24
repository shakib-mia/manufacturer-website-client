import React from "react";
import Banner from "./Banner/Banner";
import Tools from "./Tools/Tools";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";
import PlaceReview from "./PlaceReview/PlaceReview";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Tools></Tools>
      <Reviews></Reviews>
      <PlaceReview></PlaceReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
