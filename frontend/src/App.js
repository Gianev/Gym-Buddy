import { BrowserRouter, Routes, Route } from "react-router-dom";

// import our pages & components
import Home from "./pages/workouts";
import Navbar from "./components/Navbar.js";
//import Meals from "./pages/meals";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
