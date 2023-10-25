import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/DummyData.json";

const handleNewsPick = (link) => {
  window.open(link, "_blank");
};

function Stories() {
  const { id } = useParams();
  const char = id.charAt(0).toUpperCase();
  return (
    <div className="stories-container">
      <div className="stories-wrapper">
        <h1>{char + id.slice(1)}</h1>
        <ul>
          {data.map((news) => (
            <li key={news.title} onClick={() => handleNewsPick(news.url)}>
              <img
                alt="icon"
                src={news.multimedia[0].url}
                height="72"
                width="72"
              />
              <p>{news.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Stories;
