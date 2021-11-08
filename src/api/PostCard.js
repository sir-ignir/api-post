const PostCard = ({ title, body, name }) => {
  return (
    <div className="postCardContainer">
      <h3>{title}</h3>
      <p>{body}</p>
      <p style={{ color: "yellow" }}>{name}</p>
    </div>
  );
};

export default PostCard;
