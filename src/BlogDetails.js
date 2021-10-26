import { useParams } from "react-router";
import { useHistory } from "react-router";
import useFetch from "./usefetch";

const BlogDetails = () => {
    const { id } = useParams();
    const  { data: blogs, ispending, error } = useFetch("http://localhost:8000/blogs/"+ id);
    const history = useHistory();
    const handleClick = () =>{
        fetch("http://localhost:8000/blogs/" + blogs.id, {
           method :"DELETE"
        }).then(() => {
            history.push("/");
        })
    }
    return ( 
      <div className="blog-details">
          {error && <div>{ error }</div>}
          {ispending && <div>Loading...</div>}
          {blogs && <article>
              <h2>{ blogs.title }</h2>
              <p>Written By { blogs.author }</p>
              <div>{ blogs.body }</div>
              <button className="create" onClick = {handleClick}>Delete</button>
              </article>}
      </div>
     );
}
 
export default BlogDetails;