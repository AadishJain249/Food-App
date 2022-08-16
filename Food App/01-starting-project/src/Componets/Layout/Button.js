import CartIcon from "../Cart/CartIcon"
import classes from './Button.module.css'
import CartContext from "../Store/cart-content"
import { useContext ,useState,useEffect} from "react"
// import { Fragment } from "react"
const Button=(props)=>{
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const ctx=useContext(CartContext)
    const Item=ctx.items.reduce((curNum,item)=>{
        // console.log(curNum+item.amount);
        return curNum+item.amount
    },0)
    const { items } = ctx;
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);


  // const nOfItem = ctx.items.reduce((curNumber, item) => {
  //   return curNumber + item.amount;
  // }, 0);

    return(
        // <Fragment>
        <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>
          {Item}
            </span>
        </button>
        // {/* </Fragment> */}
    )
}
export default Button