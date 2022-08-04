import Modal from '../UI/Modal'
import classes from './CartItem.module.css'
const CartItem=(props)=>{
    const cartitem = (
        <ul className={classes['cart-items']}>
          {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      );
    return (
       <Modal onClose={props.onClose}>
       {cartitem}
       <div className={classes.total}>
        {props.name}
        <span>Total Amount</span>
        <span>15$</span>
       </div>
       <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close
        </button>
        <button className={classes.button}>Order</button>
       </div>
       </Modal>
    )
}
export default CartItem
