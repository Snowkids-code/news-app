import React from "react";

const handleNewsPick = (link) => {
  window.open(link, "_blank");
};

function News({ title, data }) {
  return (
    <div className="homepage-news-container">
      <h2>{title}</h2>
      <div className="homepage-news-wrapper">
        {data?.slice(0, 12).map((news) => (
          <div
            className="news-wrapper"
            key={news.title}
            onClick={() => handleNewsPick(news.url)}
          >
            <img
              alt="news"
              src={news.multimedia[0].url}
              width="256"
              height="256"
            />
            <h3>{news.title}</h3>
            <p>{news.abstract?.slice(0, 100) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
