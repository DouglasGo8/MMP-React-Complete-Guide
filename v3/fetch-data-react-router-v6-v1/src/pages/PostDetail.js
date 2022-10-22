import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../utils/api";

import BlogPost from "../components/BlogPost";

const PostDetail = () => {
  const [post, setPost] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams(); // like history
  const { id } = params;

  useEffect(() => {
    setIsLoading(true);
    const loadPost = async () => {
      try {
        const post = await getPost(id);
        setPost(post);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    };
    loadPost();
  }, [id]);

  return (
    <>
      {isLoading && <p>Loading post...</p>}
      {error && <p>{error.message}</p>}
      {!error && post && <BlogPost title={post.title} text={post.body} />}
    </>
  );
};

export default PostDetail;
