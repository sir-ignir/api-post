import { useState, useEffect } from "react";
import axios from "axios";
import PostCard from "./PostCard";
import "./Post.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function Post() {
  const [isLoading, setIsLoading] = useState(true);
  const [Post, setPost] = useState([]);
  const [Users, setUsers] = useState([]);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = await axios.get("https://jsonplaceholder.typicode.com/posts");
      const aut = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(aut.data);
      setTimeout(() => setIsLoading(false), 800);
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
      {isLoading ? (
        <p>getting data</p>
      ) : (
        <div id="CardPost">
          {Post.map((post) => {
            return (
              <PostCard
                title={post.title}
                body={post.body}
                id={post.id}
                name={Users.find((i) => i.id == post.userId)}
              />
            );
          })}
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Post;
