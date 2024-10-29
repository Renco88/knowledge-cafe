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
  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto ">
        <Blogs handleAssToBookmark={handleAssToBookmark} 
        handleMarkAsRead ={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
