import classes from './Modal.module.css';
import ReactDom from 'react-dom';
import React from 'react';
const Backdrop = props =>
{
return <div className = {classes.backdrop} onClick ={props.onClose}></div>
};

const ModalOverlay = props => {
    return <div className = {classes.modal} onClick = {props.onClose}>
    <div className = {classes.content}>{props.children}</div>
    </div>
};

const portalElement = document.getElementById('overlays');
function Modal(props)
{
return(<React.Fragment>
    {ReactDom.createPortal(<Backdrop onClose = {props.onClose}></Backdrop>,portalElement)}
    {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
</React.Fragment>

);

}

export default Modal;