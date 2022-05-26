import { useState } from "react";

const Home = () => {

const [blogs, setBlogs]= useState([

    {title:'React blog', body:'lorem ipsum...',author: 'Edwin', id: 1},
    {title:'welcome party', body:'lorem ipsum...',author: 'Jack', id: 2},
    {title:'web dev tips', body:'lorem ipsum...',author: 'Bett', id: 3}
]);    
     
    return (
        <div className="home">
        {blogs.map((blog) =>(
         <div className="blog-preview" key={blog.id}>
             <h2>{blog.title}</h2>
             <p>Written by {blog.author}</p>
         </div>

        ))} 
        
        </div>
    );
}
 
export default Home;