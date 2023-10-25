import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import {
  getArtsNews,
  getAutoNews,
  getBooksNews,
  getBusinessNews,
  getHomeNews,
  getSportsNews,
  getTravelNews,
} from "./reducers/news.reducers";
import Routers from "./routes/Routers";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    let isMounted = false;

    if (!isMounted) {
      dispatch(getHomeNews());
      dispatch(getSportsNews());
      dispatch(getArtsNews());
      dispatch(getAutoNews());
      dispatch(getBooksNews());
      dispatch(getBusinessNews());
      dispatch(getTravelNews());
    }

    isMounted = true;
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
