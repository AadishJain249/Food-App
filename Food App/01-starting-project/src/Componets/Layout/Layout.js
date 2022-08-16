import {Fragment} from 'react'
import mealImg from '../../image/meals.jpg'
import classes from './Layout.module.css'
import Button from './Button'
const Layout=(props)=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>Food App!</h1>
            <Button onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealImg} alt="Wrong"/>
        </div>
    </Fragment>
}
export default Layout