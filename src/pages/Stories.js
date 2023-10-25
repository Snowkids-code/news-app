import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import data from "../data/DummyData.json";
import { getCategoryNews } from "../reducers/news.reducers";

const handleNewsPick = (link) => {
  window.open(link, "_blank");
};

function Stories() {
  const { id } = useParams();
  const char = id.charAt(0).toUpperCase();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getCategoryNews(id));
    }
    // eslint-disable-next-line
  }, [id]);

  const newsData = useSelector((state) => state.newsReducers.categoryNews);

  return (
    <div className="stories-container">
      <div className="stories-wrapper">
        <h1>{char + id.slice(1)}</h1>
        <ul>
          {newsData.length > 1
            ? newsData.slice(0, 12).map((news) => (
                <li key={news.title} onClick={() => handleNewsPick(news.url)}>
                  <img
                    alt="icon"
                    src={news?.multimedia[0].url}
                    height="72"
                    width="72"
                  />
                  <p>{news?.title}</p>
                </li>
              ))
            : data.slice(0, 12).map((news) => (
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
