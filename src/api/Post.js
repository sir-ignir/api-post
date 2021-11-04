import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import "./Post.css";
function Post() {
  const [Post, setPost] = useState([]);
  const fetchData = async () => {
    try {
      const url = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPost(url.data);
    } catch (error) {
      console.log("error =>", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div id="CardPost">
        {Post.map((post) => {
          return <PostCard title={post.title} body={post.body} />;
        })}
      </div>
    </div>
  );
}

export default Post;
