import React from "react";
import { Link } from "react-router-dom";

function PostList( { posts } ) {

  return (

    <ul>
      { posts.map((post) => {
        return (
            <li key={post.id}>
            <h6>{ post.date.substring(0, 10).split("-").reverse().join("-") }</h6>
            <Link to={`/blogposts/${post.title.replaceAll(" ", "-")}`}>{ post.title }</Link>
            </li>
                )
        })}
    </ul>


  );




}


export default PostList;
