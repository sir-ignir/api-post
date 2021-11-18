import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  let params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [Post, setPost] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = "https://jsonplaceholder.typicode.com/posts/" + params.id;
      const res = await axios.get(url);
      setPost(res.data);
      setTimeout(() => setIsLoading(false), 800);
    } catch (error) {
      console.log(error);
    }
    if (isLoading) return <p>retrieving data ...</p>;
  };
  useEffect(() => {
    fetchData();
  }, [params.id]);
  return (
    <div>
      <h1>single post id {params.id}</h1>
      <p>title: {Post.title}</p>
      <p>body: {Post.body}</p>
    </div>
  );
};

export default SinglePost;
