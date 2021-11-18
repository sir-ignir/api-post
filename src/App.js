import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import SinglePost from "./page/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
