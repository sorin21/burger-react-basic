import React, {Component} from "react";
import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // ! from previous state
    return nextProps.show !== this.props.show;
  }
  componentWillUpdate() {
    console.log('[Modal] will update');
  }
  // componentDidUpdate() {
  //   console.log('[Modal] did update');
  // }
  render() {
    const modalAnimationStyle = {
          transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.show ? '1' : '0'
      };
    return (
      <Aux>
        <Backdrop 
          show={this.props.show}
          clicked={this.props.modalClosed} />
        <div 
          className={classes.Modal} 
          style={modalAnimationStyle}>
          {this.props.children}
        </div>
      </Aux> 
    );
  }
}

export default Modal;