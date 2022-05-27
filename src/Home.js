import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

const [blogs, setBlogs]= useState([

    {title:'React blog', body:'lorem ipsum...',author: 'Edwin', id: 1},
    {title:'welcome party', body:'lorem ipsum...',author: 'Jack', id: 2},
    {title:'web dev tips', body:'lorem ipsum...',author: 'Bett', id: 3}
]);    
     
    return (
        <div className="home">
        <BlogList blogs ={blogs} title="All blogs"/>
        
        </div>
    );
}
 
export default Home;