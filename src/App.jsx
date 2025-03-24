import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
};

export default App;