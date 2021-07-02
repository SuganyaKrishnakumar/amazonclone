import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        
        <img
          src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg"
          //"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home__img"
          alt=""
        />
        
      </div>

      <div className="home__row">
        <Product
          id="12"
          title="The Lean Startup : How Constant Innovation Creates Radically Successful Businesses Paperback"
          image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          price={2432}
          rating={2}
        />
        <Product
          id="14"
          title="CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4"
          image="https://m.media-amazon.com/images/I/81Wx7hw9vwL._AC_UL480_FMwebp_QL65_.jpg"
          price={234354}
          rating={5}
        />
      </div>
      <div className="home__row">
        <Product
          id="15"
          title="Lenovo Chromebook Flex 5 13 Laptop, FHD (1920 x 1080) Touch Display, Intel Core i3-10110U Processor"
          image="https://m.media-amazon.com/images/I/61qIQqN3blS._AC_UL480_FMwebp_QL65_.jpg"
          price={24}
          rating={2}
        />
        <Product
          id="16"
          title="Paekabao Home Bedding 6 Piece Sheet Set ,Luxury Soft 1800 Thread Count Brushed Microfiber - Wrinkle, Fade"
          image="https://m.media-amazon.com/images/I/416SK85YqVL._AC_UL480_FMwebp_QL65_.jpg"
          price={39.99}
          rating={3}
        />
        <Product
          id="17"
          title="Waterpik WP-660 Water Flosser Electric Dental Countertop Professional Oral Irrigator For Teeth, Aquarius, White"
          image="https://images-na.ssl-images-amazon.com/images/I/31Bfzl8w8qL.jpg"
          price={69.99}
          rating={4}
        />
        <Product
          id="18"
          title="Portable Folding Camping Stool Lightweight Telescopic Seat Stool Sturdy for Hiking Fishing Outdoor Recreations"
          image="https://m.media-amazon.com/images/I/61b4u+o-RXS._AC_UL480_FMwebp_QL65_.jpg"
          price={45}
          rating={2}
        />
      </div>
      <div className="home__row">
        <Product
          id="19"
          title="GearLight LED Headlamp Flashlight S500 [2 Pack] - Running, Camping, and Outdoor Headlight Headlamp"
          image="https://m.media-amazon.com/images/I/71jaMww-GWL._AC_UL480_FMwebp_QL65_.jpg"
          price={100}
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
