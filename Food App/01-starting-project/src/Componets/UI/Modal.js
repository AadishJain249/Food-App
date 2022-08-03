import classes from './Modal.module.css'
import ReactDom from 'react-dom'
import { Fragment } from 'react'
const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}
const Modaloverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}
const create=document.getElementById('overlay')
const Modal=(props)=>{
    return(
    <Fragment>
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}/>,create)}
        {ReactDom.createPortal(
            <Modaloverlay>{props.children}</Modaloverlay>,create
        )}
    </Fragment>
    )
}
export default Modal