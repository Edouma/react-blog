import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

const [blogs, setBlogs]= useState([

    {title:'React blog', body:'lorem ipsum...',author: 'Edwin', id: 1},
    {title:'Welcome party', body:'lorem ipsum...',author: 'Bett', id: 2},
    {title:'Web dev tips', body:'lorem ipsum...',author: 'Edwin', id: 3}
]);    
const handleDelete = (id)=>{
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
}     

    return (
        <div className="home">
        <BlogList blogs ={blogs} title="All blogs" handleDelete={handleDelete}/>
        
        </div>
    );
}
 
export default Home;