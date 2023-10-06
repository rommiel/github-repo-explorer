import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/homepage/Homepage.tsx";
import Search from "./components/pages/search/Search.tsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="search" element={<Search />} />
          <Route
            path="*"
            element={<h1 className="text-center">Page Not Found...</h1>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
