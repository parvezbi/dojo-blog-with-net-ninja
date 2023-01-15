import { Link } from "react-router-dom";

const BlogList = ({catchBlogs, title}) => {
    // const allBlogs = props.catchBlogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {catchBlogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h1>{blog.title}</h1>
                        <p>Written By: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;