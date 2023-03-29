import React from "react";
import { useParams } from "react-router-dom";
import blogLoader from "../../helperfunction/blogLoader";
import { Link } from "react-router-dom";

function Blogpage() {

  const { id } = useParams();
  const posts = blogLoader();
  const post = posts.find((post) => post.title.replaceAll(" ", "-") === id); 

  return (

    <>    
      
        <div className="outer-container">
          <div className="inner-container">
            <main>
              <h2>{ post.title }</h2>
              <h6>{ post.date.substring(0, 10).split("-").reverse().join("-") }</h6>
              <p>{ post.content }</p>
              <Link to="/Blogposts">Terug naar Blogposts</Link>
             </main>
          </div>
        </div>

    </>
  )


}


export default Blogpage;