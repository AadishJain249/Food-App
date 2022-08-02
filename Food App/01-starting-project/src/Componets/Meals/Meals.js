import AvailableMeal from "./AvailableMeal"
import MealSum from "./MealSum"
import { Fragment } from "react"
const Meals=(props)=>{
    return(
        <Fragment>
        <MealSum></MealSum>
        <AvailableMeal></AvailableMeal>
    </Fragment>
    )
    
}
export default Meals