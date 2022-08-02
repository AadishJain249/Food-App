import CartIcon from "../Cart/CartIcon"
import classes from './Button.module.css'
// import { Fragment } from "react"
const Button=(props)=>{
    return(
        // <Fragment>
        <button className={classes.button}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>1</span>
        </button>
        // {/* </Fragment> */}
    )
}
export default Button