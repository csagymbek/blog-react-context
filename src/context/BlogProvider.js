import React, { useReducer } from "react";
import { BlogContext } from "./BlogContext";
import { BlogReducer } from "./blogReducer";

export default function BlogProvider({ children }) {
  const initialState = {
    blogPosts: [],
    currentBlogPost: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(BlogReducer, initialState);

  const getPosts = async () => {
    try {
      dispatch({ type: "SENDING_REQUEST" });
      const res = await fetch("/posts");
      const data = await res.json();
      dispatch({ type: "REQUEST_FINISHED" });
      dispatch({ type: "SET_POSTS", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  const getPostById = async (id) => {
    try {
      dispatch({ type: "SENDING_REQUEST" });
      const res = await fetch(`/posts/${id}`);
      const data = await res.json();
      dispatch({ type: "REQUEST_FINISHED" });
      dispatch({ type: "SET_POST", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogPosts: state.blogPosts,
        currentBlogPost: state.currentBlogPost,
        loading: state.loading,
        getPosts,
        getPostById,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}
