import React from 'react'
import ReactDom from 'react-dom';
import classes from './Modal.module.css';
const Modal = (props) => {
    const Overlay = () => <div onClick={props.closeOverlay} className={classes.Overlay}></div>

    const Backdrop =(props) => <div className={classes.Backdrop}>
        <div>{props.children}</div>
    </div>

    const modalItem = document.getElementById('modal')
  return (
    <>
        {ReactDom.createPortal(<Overlay closeOverlay={props.closeOverlay} />, modalItem)}
        {ReactDom.createPortal(<Backdrop >{props.children}</Backdrop>, modalItem)}
    </>
  )
}

export default Modal