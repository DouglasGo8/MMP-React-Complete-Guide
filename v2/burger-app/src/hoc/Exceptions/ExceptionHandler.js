import React, { Component } from "react";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

const exceptionHandler = (WrappedElement, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    async componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (err) => {
          this.setState({ error: err });
        }
      );
    }

    async componentWillUnmount() {
      console.log(
        "Component will Unmount",
        this.reqInterceptor,
        this.resInterceptor
      );
      // Prevent Memory Leaks
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandler = async () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
            Something didn't work!
            <br />
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedElement {...this.props} />
        </Aux>
      );
    }
  };
};

export default exceptionHandler;
