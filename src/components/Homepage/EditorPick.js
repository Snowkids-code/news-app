import React from "react";

const handleNewsPick = (link) => {
  window.open(link, "_blank");
};

function EditorPick({ data }) {
  return (
    <div>
      <h1>Editor's Picks</h1>
      <div className="editor-pick-container">
        <div className="left-wrapper">
          <div className="top-story">
            <img src={data[0].multimedia[0].url} height="526" alt="icon" />
            <p>{data[0].title}</p>
          </div>
          <div className="editor-stories-wrapper">
            {data.slice(0, 6).map((news) => (
              <div
                className="news-wrapper"
                key={news.title}
                onClick={() => handleNewsPick(news.url)}
              >
                <img
                  alt="news"
                  src={news.multimedia[0].url}
                  width="100%"
                  height="256"
                />
                <h3>{news.title}</h3>
                <p>{news.abstract.slice(0, 100) + "..."}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="right-wrapper">
          <h2>Latest Business News</h2>
          <ul>
            {data.map((news) => (
              <li key={news.title} onClick={() => handleNewsPick(news.url)}>
                {news.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default EditorPick;
