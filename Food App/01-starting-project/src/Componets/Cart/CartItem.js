import { useContext,useState } from 'react'
import CartContext from '../Store/cart-content'
import Modal from '../UI/Modal'
import classes from './CartItem.module.css'
import CartRender from './CartRender'
import Checkout from './Checkout'
const CartItem=(props)=>{
    const[order,onOrder]=useState(false)
    const ctx=useContext(CartContext)
    const totalamount=`$${ctx.TotalAmount.toFixed(2)}`
    const OrderCheck=ctx.items.length>0
    const AddItem=(item)=>{
      ctx.additem({...item,amount:1})
    }
    const RemoveItem=(id)=>{
      ctx.removeitem(id)
    }
    const orderHandler=(props)=>{
      onOrder(true)
    }
    const cartitem = (
        <ul className={classes['cart-items']}>
          {
          ctx.items.map((item) => (
            <CartRender
              key={item.id}
              // id={item.id}
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
      const modal=
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {OrderCheck && <button className={classes.button} onClick={orderHandler}>Order</button>}
       </div>
       const submitHandle=(userData)=>{
          fetch('https://food-api-d657f-default-rtdb.firebaseio.com/orders.json',{
            method:'POST',
            body:JSON.stringify({
              user:userData,
              orderItems:ctx.items
            })
          })
       }
    return (
       <Modal onClose={props.onClose}>
       {cartitem}
       <div className={classes.total}>
        {props.name}
        <span>Total Amount</span>
        <span>{totalamount}</span>
       </div>
       {order && <Checkout onConfirm={submitHandle} onCancel={props.onClose}/>}
       {!order && modal}
       </Modal>
    )
}
export default CartItem
