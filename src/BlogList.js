const BlogList = ({catchBlogs, title}) => {
    // const allBlogs = props.catchBlogs;
    // const title = props.title;
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {catchBlogs.map((blog)=> (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Written By: {blog.author}</p>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;