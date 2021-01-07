import { useContext, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";
import PostCard from "./PostCard";

export default function PostList() {
  const { getPosts, blogPosts, loading } = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  }, []);

  //   console.log(blogPosts);

  return (
    <div className="posts">
      <div className="container">
        <h2>Posts</h2>
        {!loading ? (
          <div className="posts-grid-container">
            {blogPosts?.map(({ title, id, image, author, date }) => {
              return (
                <PostCard
                  key={id}
                  title={title}
                  image={image}
                  author={author}
                  date={date}
                  id={id}
                />
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
