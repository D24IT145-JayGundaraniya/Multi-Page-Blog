import { useNavigate } from "react-router-dom";

const blogs = [
  { id: 1, title: "Understanding React", content: "A deep dive into React fundamentals." },
  { id: 2, title: "Styling in Tailwind CSS", content: "Learn how to style components with Tailwind." },
  { id: 3, title: "React Router v7 Guide", content: "Master navigation in React applications." },
];

const BlogList = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Latest Blogs</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="p-6 border rounded-lg bg-white shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800">{blog.title}</h3>
            <p className="text-gray-600 mt-2">{blog.content.substring(0, 50)}...</p>
            <button 
              onClick={() => navigate(`/blogs/${blog.id}`)} 
              className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;