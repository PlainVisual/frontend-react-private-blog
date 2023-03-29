import React from "react";
import "./blogposts.css"
import PostList from "../../components/postlisting/Postlist";
import blogLoader from "../../helperfunction/blogLoader";

function Blogposts() {
  
  const posts = blogLoader();
  
  return (

    <>
    
        <div className="outer-container nav-sticky">
          <div className="inner-container">
            <main className="blogposts">
              <h1>Blogpost overzicht pagina</h1>
              <h2>Aantal berichten: { posts.length }</h2>
              <PostList posts={posts} />
            </main>
          </div>
        </div>
      

    </>

  )

}


export default Blogposts;