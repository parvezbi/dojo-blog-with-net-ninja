import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data, isPending, isError } = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
            {isError && <div>{isError}</div>}
            {isPending && <Skeleton count={10} />}
            {data && <BlogList catchBlogs={data} title="All Blogs"/>}
        </div>
     );
}
 
export default Home;
