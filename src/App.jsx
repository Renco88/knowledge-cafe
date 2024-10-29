import Blogs from "./Components/Blogs/Blogs";
import "./App.css";
import Header from "./Components/Header/Header";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks,setBookmarks] =useState([]);

  const handleAssToBookmark = blog =>{
    console.log('bookmark adding soon')
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto ">
        <Blogs handleAssToBookmark={handleAssToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
