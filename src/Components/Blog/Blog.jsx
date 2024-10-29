import propTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog,handleAssToBookmark,handleMarkAsRead }) => {
  const {
    title,
    cover,
    author,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover} alt={`cover pictur of the titel ${title}`} />
      <div className="flex justify-between mb-4">
        <div className="flex ">
          <img className="w-14" src={author_img} alt="" />
          <div className="mx-6">
            <h3 className="text-2xl"> {author} </h3>

            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} Min Read</span>
          <button onClick={() => handleAssToBookmark(blog)} className="ml-2 text-2xl text-red-600"><CiBookmark /></button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
     <p>
     { 
        hashtags.map(( hash , idx) => <span key={idx}><a href="">#{hash}</a></span>)
      }
      
     </p>
     <button
                onClick={() => handleMarkAsRead(reading_time)}
                className='text-purple-800 font-bold underline'
            >Mark As Read</button>
    </div>
  );
};
Blog.propTypes = {
  blog: propTypes.object.isRequired,
  handleAssToBookmark : propTypes.func
};

export default Blog;
