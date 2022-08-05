import { useContext } from 'react'
import CartContext from '../Store/cart-content'
import Modal from '../UI/Modal'
import classes from './CartItem.module.css'
import CartRender from './CartRender'
const CartItem=(props)=>{
    const ctx=useContext(CartContext)
    const totalamount=`$${ctx.TotalAmount.toFixed(2)}`
    const OrderCheck=ctx.items.length>0
    const AddItem=(item)=>{

    }
    const RemoveItem=(id)=>{

    }
    const cartitem = (
        <ul className={classes['cart-items']}>
          {
          ctx.items.map((item) => (
            <CartRender
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onRemove={RemoveItem.bind(null,item.id)}
              onAdd={AddItem.bind(null,item)}
            />
          
          ))
          }
        </ul>
      );
    return (
       <Modal onClose={props.onClose}>
       {cartitem}
       <div className={classes.total}>
        {props.name}
        <span>Total Amount</span>
        <span>{totalamount}</span>
       </div>
       <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {OrderCheck && <button className={classes.button}>Order</button>}
       </div>
       </Modal>
    )
}
export default CartItem
