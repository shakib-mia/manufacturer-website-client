import React, { useEffect, useState } from "react";

const Banner = () => {
  const [products, getProducts] = useState([]);
  useEffect(() => {
    fetch("https://intense-ravine-32136.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => getProducts(data));
  });
  return (
    <div className="carousel w-full h-full lg:h-screen z-0">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={products[0]?.image} className="w-full p-20" alt="carousel" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={products[1]?.image} className="w-full p-20" alt="carousel" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={products[2]?.image} className="w-full p-20" alt="carousel" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={products[3]?.image} className="w-full p-20" alt="carousel" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
