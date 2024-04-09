import { RxCrossCircled } from "react-icons/rx";
import { PostList } from "../store/PostListStore";
import { useContext } from "react";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.tittle}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              <RxCrossCircled onClick={() => deletePost(post.id)} />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="badge rounded-pill text-bg-primary hashtag"
            >
              {tag}
            </span>
          ))}
          <div className="alert alert-success reactions" role="alert">
            This Post is reacted by {post.reaction} people.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
