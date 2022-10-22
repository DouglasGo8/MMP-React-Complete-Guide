import { RouterProvider, createBrowserRouter, Route, Routes } from "react-router-dom";

import RootLayout from "./components/RootLayout";
import WelcomePage from "./pages/WelcomePage";
import BlogLayout from "./pages/BlogLayout";
import BlogPosts, { loader as loaded } from "./pages/BlogPosts";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";

import "./App.css";


const router = createBrowserRouter([
  {path: '/', element: WelcomePage}
]);


const App = () => {
  return (
    <RouterProvider router={createBrowserRouter} />
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/blog" element={<BlogLayout />}>
            <Route index element={<BlogPosts />} loader={loaded} />
            <Route path=":id" element={<PostDetail />} />
          </Route>
          <Route path="/blog/new" element={<NewPost />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
