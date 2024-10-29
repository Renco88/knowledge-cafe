import Bookmark from "../Bookmaark/Bookmark";
const Bookmarks = ({ bookmarks ,readingTime}) => {
  return (
    <div className="w-1/3">
      <div>
        <h3 className="text-2xl font-bold text-[#6047EC] border-r-8  pb-4 text-center bg-[#6047EC1A] rounded-lg items-center m-4">Reading time : {readingTime} Min</h3>
      </div>
      <div className=" bg-gray-300 ml-4 mt-2 pt-4 rounded-lg ">
      <h2 className="tex-3xl text-center  ">BookMarks : {bookmarks.length}</h2>

      {bookmarks.map((bookmark,idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
      </div>
     
    </div>
  );
};

export default Bookmarks;
