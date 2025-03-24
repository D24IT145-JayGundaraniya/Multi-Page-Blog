import { Link, useParams } from "react-router-dom";

const blogs = [
  { id: 1, title: "Understanding React", content: "A deep dive into React fundamentals." },
  { id: 2, title: "Styling in Tailwind CSS", content: "Learn how to style components with Tailwind." },
  { id: 3, title: "React Router v7 Guide", content: "Master navigation in React applications." },
];

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div className="p-6 text-red-500 text-center">Blog post not found!</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800">{blog.title}</h2>
      <p className="mt-4 text-gray-700">{blog.content}</p>
      <Link to="/blogs" className="mt-6 inline-block px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition">Back to Blogs</Link>
    </div>
  );
};

export default BlogPost;