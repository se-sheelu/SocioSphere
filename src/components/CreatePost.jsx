import { useRef, useContext } from "react";
import { PostList } from "../store/PostListStore";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTittleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTittle = postTittleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTittleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postTittle, postBody, reactions, tags);
  };

  return (
    <>
      <form className="creat-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            ref={userIdElement}
            type="text"
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tittle" className="form-label">
            Post Tittle
          </label>
          <input
            ref={postTittleElement}
            type="text"
            className="form-control"
            id="tittle"
            placeholder="How are you feeling today..."
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            ref={postBodyElement}
            type="text"
            className="form-control"
            id="tittle"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsElement}
            type="text"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Your Tags
          </label>
          <input
            ref={tagsElement}
            type="text"
            className="form-control"
            id="tag"
            placeholder="Please Enter your tags using space"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
