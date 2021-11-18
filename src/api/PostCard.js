import { Link } from "react-router-dom";
const PostCard = ({ title, body, name, id }) => {
  // const postLink = "/posts/" + id;
  return (
    <div className="postCardContainer">
      <img src="https://source.unsplash.com/random/200x100" />
      <h3>{title}</h3>
      <p>{body}</p> <p style={{ color: "red" }}>{name.name}</p>
      <Link to={`/posts/${id}`}>read more</Link>
    </div>
  );
};

export default PostCard;
