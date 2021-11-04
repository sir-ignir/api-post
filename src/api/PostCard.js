const PostCard = ({ title, body }) => {
  return (
    <div className="postCardContainer">
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
