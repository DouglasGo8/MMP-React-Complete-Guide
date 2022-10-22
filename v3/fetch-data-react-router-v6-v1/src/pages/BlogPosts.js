import { useLoaderData } from "react-router-dom";

import { getPosts } from "../utils/api";

import Posts from "../components/Posts";

const BlogPosts = () => {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Blog Posts</h1>
      <Posts blogPosts={loaderData} />
    </>
  );
};

export default BlogPosts;

export function loader() {
  return getPosts();
}
