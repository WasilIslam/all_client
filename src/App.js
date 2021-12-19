import "./App.css";
import GoogleAuth from "./GoogleAuth/GoogleAuth";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cookieparser from "./CookieParser/CookieParser";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<h1 >I am landing page</h1>} />
          <Route path="/googleAuth" exact element={<GoogleAuth />} />
          <Route path="/cookieParser" exact element={<Cookieparser />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
