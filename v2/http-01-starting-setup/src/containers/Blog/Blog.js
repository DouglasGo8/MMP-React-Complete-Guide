import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";

import "./Blog.css";
import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";
import FullPost from "../../containers/Blog/FullPost/FullPost";
import AsyncComponent from "../../hoc/asyncComponent";

/**
 * use  React.lazy(()=> import('path to component')) with react > 16.6 => <Suspense fallback={<div>Loading ...</div>}><YourComponent /></Suspense>
 */
const AsyncNewPost = AsyncComponent(() => {
  return import("./NewPost/NewPost");
});
/**
 * @author dbatista
 */
class Blog extends Component {
  render() {
    //
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "#fa923f",
                    textDecoration: "underline",
                  }}
                  to="/"
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {
          // rules Routes
          // localhost:3000/ -> Posts
        }
        <Route path="/" exact component={Posts} />
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
