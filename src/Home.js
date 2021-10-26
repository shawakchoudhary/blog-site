import BlogList from './BlogList';
import useFetch from './usefetch';

const Home = () => {
    const  { data: blogs, ispending, error } = useFetch("http://localhost:8000/blogs");
    return ( 
        <div className="home">
            { error && <div>{ error }</div> }
            {ispending && <div>Loading....</div> }
            { blogs && <BlogList blogs = { blogs } title = "All Blog!" />}
        </div>
     );
}
 
export default Home;