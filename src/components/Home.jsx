import { Link } from "react-router-dom";

const Home = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Welcome to My Blog</h1>
    <p className="mt-2 text-lg text-gray-600">Explore various articles on different topics</p>
    <Link to="/blogs" className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Go to Blogs</Link>
  </div>
);

export default Home;