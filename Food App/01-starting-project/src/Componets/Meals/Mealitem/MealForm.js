import {useRef} from 'react'
import { useState } from 'react'
import classes from './MealForm.module.css'
import Input from '../../UI/Input'
const MealForm=(props)=>{
    const amount=useRef()
    const [inState,onState]=useState(true)
    const submit=(event)=>{
        event.preventDefault()
        const amountRef=amount.current.value
        const enteredAmount=+amountRef
        
    if (
        amountRef.trim().length === 0 ||
        enteredAmount < 1 ||
        enteredAmount > 5
      )
      {
        onState(false)
        return 
      }    
      props.onCartNumber(enteredAmount)
    }

    return (
        <form className={classes.form} onSubmit={submit}>
            <Input
            ref={amount} 
            label='Amount'
            input={{
                
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }}
            />
            <button>+Add</button>
            {!inState && <p>Eroor</p>}
        </form>
    )
}
export default MealForm