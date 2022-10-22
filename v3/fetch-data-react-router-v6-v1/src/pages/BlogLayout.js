

import BlogActions from "../components/BlogActions";
import { Outlet } from "react-router-dom";


const BlogLayout = () => {
  return (
    <>
      <BlogActions />
      <Outlet/>
    </>
  )
}


export default BlogLayout;