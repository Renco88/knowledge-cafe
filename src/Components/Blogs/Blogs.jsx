import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from "prop-types";

const Blogs = ({ handleAssToBookmark,handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3">
      <h1 className="text-4xl m-5 bg-[#6047EC1A] text-center rounded-lg text-[#6047EC] border-r border-s-blue-500">Blogs: {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAssToBookmark={handleAssToBookmark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blog>
      ))}
    </div>
  );
};
Blogs.propTypes = {
    handleAssToBookmark : propTypes.func
}

export default Blogs;
