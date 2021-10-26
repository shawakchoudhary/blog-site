import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title , setTitle] = useState("");
    const [body , setBody] = useState("");
    const [author , setAuthor] = useState("Vasu");
    const [ispending , setIsPending] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title , body, author};
        setIsPending(true);
       fetch("http://localhost:8000/blogs",{
           method : "POST",
           headers : {"content-type" : "application/json"},
           body : JSON.stringify(blog)
       }).then(()=> {
           console.log("New Blog Added")
           setIsPending(false);
           history.push("/");
       })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title</label>
                <input 
                type="text"
                required
                value = {title}
                onChange = {(e)=> setTitle(e.target.value) } 
                />
                <label>Blog Body</label>
                <textarea
                type = "text"
                  required
                  value = {body}
                  onChange = {(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author</label>
                <select
                required
                 value = { author }>
                    onChange = {(e) => setAuthor(e.target.value)}
                    <option value="Shawak">Shawak</option>
                    <option value="Mridula">Mridula</option>
                    <option value="Vasu">Vasu</option>
                </select>
               { !ispending && <button>Add Blog</button> }
               {ispending &&  <button>Adding Blog</button> }
            </form>
        </div>
     );
}
 
export default Create;