
import { useContext } from 'react'
import MealForm from './MealForm'
import classes from './Mealitem.module.css'
import CartContext from  '../../Store/cart-content'
const Mealitem=(props)=>{
    const cartCtx=useContext(CartContext)
    // one is to print dollar sign and other dollar sign is to put dynamic content in template literal
    const price=`$${props.price.toFixed(2)}`
    const addCart=(amount)=>{
        cartCtx.additem({
            id:props.id,
            name:props.name,
            amount:props.amount,
            price:props.price
        })
    }
    return(
        <li className ={classes.meal}>
            <div>
            <h2>{props.name}</h2>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealForm onCartNumber={addCart} />
            </div>
        </li>
    )
}
export default Mealitem