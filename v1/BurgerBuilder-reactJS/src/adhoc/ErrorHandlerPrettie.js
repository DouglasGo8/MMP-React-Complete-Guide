import React, { Component } from "react";

import Children from "./Children";
import Modal from "../components/UI/Modal/Modal";

/**
 * @author dbatista
 * @param {*} WrappedComponent
 */
const ErrorHandlerPrettier = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    async componentDidMount() {
      this.requestInterceptor =  axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      });
      this.responseInterceptor = axios.interceptors.response.use(null, error => {
        this.setState({
          error: error
        });
      });
    }

    async componentWillUnmount() {
      axios.interceptors.request.eject(this.requestInterceptor);
      axios.interceptors.response.eject(this.responseInterceptor);

    }

    errorConfirmed = async () => {
      this.setState({
        error: null
      });
    };
    render() {
      return (
        <Children>
          <Modal show={this.state.error} modalClosed={this.errorConfirmed}>
            <span>{this.state.error ? this.state.error.message : null}</span>
          </Modal>
          <WrappedComponent {...this.props} />
        </Children>
      );
    }
  };
};

export default ErrorHandlerPrettier;
