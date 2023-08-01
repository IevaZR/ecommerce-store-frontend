import "./App.css";
import MainPage from "./Pages/MainPage/MainPage";
import { ActiveSearchProvider } from "./HelperFunctions/ActiveSearchContext";

function App() {
  return (
    <div>
      <ActiveSearchProvider>
        <MainPage />
      </ActiveSearchProvider>
    </div>
  );
}

export default App;
