import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routers from "./routes/Routers";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </div>
  );
}

export default App;
