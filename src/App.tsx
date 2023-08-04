import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { ActiveSearchProvider } from "./HelperFunctions/ActiveSearchContext";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage/AboutPage";

function App() {
  return (
    <div>
      <ActiveSearchProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>
      </ActiveSearchProvider>
    </div>
  );
}

export default App;
