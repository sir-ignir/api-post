const PostCard = ({ title, body, name }) => {
  return (
    <div className="postCardContainer">
      <img src="https://source.unsplash.com/random/200x100" />
      <h3>{title}</h3>
      <p>{body}</p>
      <p style={{ color: "red" }}>{name.name}</p>
    </div>
  );
};

export default PostCard;
