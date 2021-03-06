import React, { Component } from "react";
import Blog from "./containers/Blog";
import { BrowserRouter } from "react-router-dom";
/**
 * @author dbatista
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
