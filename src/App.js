import "./App.css";
import HomePage from "./Components/HomePage";
import BookingPage from "./Components/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
