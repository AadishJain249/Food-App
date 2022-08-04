import CartIcon from "../Cart/CartIcon"
import classes from './Button.module.css'
import CartContext from "../Store/cart-content"
import { useContext } from "react"
// import { Fragment } from "react"
const Button=(props)=>{
    const ctx=useContext(CartContext)
    const noOfItem=ctx.items.reduce((curNum,item)=>{
        return curNum+item.amount
    },0)
    return(
        // <Fragment>
        <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{noOfItem}</span>
        </button>
        // {/* </Fragment> */}
    )
}
export default Button