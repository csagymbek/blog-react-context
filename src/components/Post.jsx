import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";

export default function Post() {
  const { getPosts, currentBlogPost, getPostById } = useContext(BlogContext);
  const { postId } = useParams();
  useEffect(() => {
    getPostById(postId);
  }, []);
  return (
    <div className="post">
      {currentBlogPost ? (
        <>
          <div
            className="post-image"
            style={{
              width: "100%",
              height: "300px",
              backgroundImage: `url("${currentBlogPost?.image})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderTopLeftRadius: "2px",
            }}
          ></div>
          <div className="post-content">
            <h2>{currentBlogPost?.title}</h2>
            <p>{currentBlogPost?.content}</p>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
