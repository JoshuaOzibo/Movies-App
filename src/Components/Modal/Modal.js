import React from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
const Modal = (props) => {
    const Overlay = (props) =>{
        return <div onClick={props.clickCloseModal} className={classes.Overlay}></div>
    }

    const Backdrop = (props) =>{
        return <div className={classes.Backdrop}>
            <div>{props.children}</div>
        </div>
    }

    const modatData = document.getElementById("modal");
  return (
    <>
        {ReactDOM.createPortal(<Overlay clickCloseModal={props.clickCloseModal} />, modatData)}
        {ReactDOM.createPortal(<Backdrop>{props.children}</Backdrop>, modatData)}
    </>
  )
}

export default Modal;