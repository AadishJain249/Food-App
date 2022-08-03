import MealForm from './MealForm'
import classes from './Mealitem.module.css'
const Mealitem=(props)=>{
    // one is to print dollar sign and other dollar sign is to put dynamic content in template literal
    const price=`$${props.price.toFixed(2)}`
    return(
        <li className ={classes.meal}>
            <div>
            <h2>{props.name}</h2>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealForm id={props.id} />
            </div>
        </li>
    )
}
export default Mealitem