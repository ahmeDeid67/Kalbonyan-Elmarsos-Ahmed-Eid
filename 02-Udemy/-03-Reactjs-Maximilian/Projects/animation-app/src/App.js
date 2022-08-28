import React, { Component } from "react";
import { Transition, CSSTransition } from "react-transition-group";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button
          className="Button"
          onClick={() =>
            this.setState((prevState) => ({ showBlock: !prevState.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("Enter")}
          onEntering={() => console.log("Entering")}
          onEntered={() => console.log("Entered")}
          onExit={() => console.log("Exit")}
          onExiting={() => console.log("Exiting")}
          onExited={() => console.log("Exited")}
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                height: 100,
                width: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>
        {/* <Transition
          in={this.state.modalIsOpen}
          timeout={animationTiming}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition> */}
        <CSSTransition
          in={this.state.modalIsOpen}
          timeout={animationTiming}
          mountOnEnter
          unmountOnExit
          classNames={{
            enter: "",
            enterActive: "ModalOpen",
            exit: "",
            exitActive: "ModalClose",
          }}
        >
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        </CSSTransition>
        {/* {this.state.modalIsOpen ? (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        ) : null} */}
        {this.state.modalIsOpen ? <Backdrop show /> : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
