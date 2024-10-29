import Bookmark from "../Bookmaark/Bookmark";
const Bookmarks = ({ bookmarks ,readingTime}) => {
  return (
    <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4 rounded-lg ">
      <div>
        <h3 className="text-3xl font-bold">Reading time : {readingTime}</h3>
      </div>
      <h2 className="tex-3xl text-center  ">BookMarks : {bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
