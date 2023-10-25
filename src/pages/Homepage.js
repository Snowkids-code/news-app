import React from "react";
import EditorPick from "../components/Homepage/EditorPick";
import News from "../components/Homepage/News";
import data from "../data/DummyData.json";

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-wrapper">
        <News title="News" data={data}/>
        <News title="Sports" data={data.slice(4, 8)}/>
        <EditorPick data={data.slice(4, 12)}/>
        <News title="Tech" data={data.slice(8, 12)}/>
        <News title="Travel" data={data.slice(13, 17)}/>
      </div>
    </div>
  );
}

export default Homepage;
