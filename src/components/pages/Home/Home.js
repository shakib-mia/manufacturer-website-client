import React from "react";
import Banner from "./Banner/Banner";
import Tools from "./Tools/Tools";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";
import PlaceReview from "./PlaceReview/PlaceReview";
import BusinessSummary from "./BusinessSummary";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <Tools></Tools>
      <Reviews></Reviews>
      <PlaceReview></PlaceReview>
      <Footer></Footer>
    </div>
  );
};

export default Home;
