import React, { Component } from "react";

import Children from "../../../adhoc/Children";
import Backdrop from "../Backdrop/Backdrop";

import "./Modal.css";

/**
 * @author dbatista
 * @param {*} props
 */
class Modal extends Component {
  async shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
  }

  /**
   * 
   */
  render() {
    return (
      <Children>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </Children>
    );
  }
}

export default Modal;
