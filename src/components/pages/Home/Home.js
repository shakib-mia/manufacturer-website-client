import React from "react";
import Banner from "./Banner/Banner";
import Tools from "./Tools/Tools";
import Reviews from "./Reviews/Reviews";
import Footer from "./Footer/Footer";
import BusinessSummary from "./BusinessSummary";
import AttractiveTools from "./AttractiveTools/AttractiveTools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BusinessSummary></BusinessSummary>
      <AttractiveTools></AttractiveTools>
      <Tools></Tools>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
};

export default Home;
