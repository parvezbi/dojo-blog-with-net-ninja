import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title:'My New Website',body:'Lorem Ipsum...',author:'Parvez Habib',id:'1'},
        {title:'Welcome Party!',body:'Lorem Ipsum...',author:'Tazim Hossain',id:'2'},
        {title:'Welcom Dev top tips',body:'Lorem Ipsum...',author:'Parvez Habib',id:'3'}
    ]);
    const [name,setName] = useState('Mario');
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log("Run It Man!");
        console.log(blogs);
    },[name])
    return ( 
        <div className="home">
            <BlogList catchBlogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <button onClick={()=>setName('Parvez')}>Click Me</button>
            {/* <BlogList catchBlogs={blogs.filter((blogs)=>blogs.author === 'Parvez Habib')} title="Parvez's Blogs"/> */}
        </div>
     );
}
 
export default Home;
