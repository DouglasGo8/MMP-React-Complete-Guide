import React, { Component } from "react";

/**
 * @author dbatista
 * @param {*} compArgs
 * @returns
 * @see React 16.6 we have another technique React.lazy()
 */
const asyncComponent = (compArgs) => {
  return class extends Component {
    state = {
      component: null,
    };

    componentDidMount = async () => {
      compArgs().then((c) => {
        this.setState({ component: c.default });
      });
    };

    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  };
};

export default asyncComponent;
