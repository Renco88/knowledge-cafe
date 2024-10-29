import Blogs from "./Components/Blogs/Blogs";
import "./App.css";
import Header from "./Components/Header/Header";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks,setBookmarks] =useState([]);
  const [readingTime,setReadingTime] =useState(0);

  const handleAssToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id, time) =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex flex max-w-7xl mx-auto ">
        <Blogs handleAssToBookmark={handleAssToBookmark} 
        handleMarkAsRead ={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
