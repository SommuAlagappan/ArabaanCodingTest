import React from "react";
import Users from "../API Components/Users";
import Comments from "../API Components/Comments";
import Posts from "../API Components/Posts";
import Todos from "../API Components/Todos";
import PostList from "../Components/PostList";
import Navbar from "../Components/Navbar";

function Portal1() {
  return (
    <div>
      <Navbar />
      <Users />
      <Posts />
      <Comments />
      <Todos />
      <PostList />
    </div>
  );
}

export default Portal1;
