import React from "react";
import { useSelector } from "react-redux";
import News from "../components/Homepage/News";
import data from "../data/DummyData.json";

function Homepage() {
  const homeData = useSelector((state) => state.newsReducers.news);

  return (
    <div className="homepage-container">
      <div className="homepage-wrapper">
        <News title="News" data={homeData.length > 1 ? homeData : data} />
      </div>
    </div>
  );
}

export default Homepage;
