import classes from './Checkout.module.css';
import { useRef, useState } from 'react';
const isEmpty=(value)=>value.trim()===''
const isFive=(value)=>value.trim().length===5
const Checkout = (props) => {
    // for true value
    const [formInputsValidity,isValid]=useState({
        name:true,
        street:true,
        postal:true,
        city:true
    })
  
    const nameInput=useRef()
    const streetInput=useRef()
    const postalInput=useRef()
    const cityInput=useRef()
    
    const onSubmitHandler=(event)=>{
        // jo value store hogi after form submission
        event.preventDefault()
    const Entername=nameInput.current.value
    const Enterstreet=streetInput.current.value
    const Enterpostal=postalInput.current.value
    const Entercity=cityInput.current.value
     
        const isName=!isEmpty(Entername)
        const isStreet=!isEmpty(Enterstreet)
        const isPostal=!isFive(Enterpostal)
        const isCity=!isEmpty(Entercity)
        isValid({
            name:isName,
            street:isStreet,
            postal:isPostal,
            city:isCity
        })
        const formValid=
            isName&& isStreet && isPostal && isCity
        if(!formValid)
        {
            return
        }
        props.onConfirm({
            name:Entername,
            street:Enterstreet,
            city:Entercity,
            postal:Enterpostal
        })
    }
    const nameControlClasses = `${classes.control} ${
        formInputsValidity.name ? '' : classes.invalid
      }`;
      const streetControlClasses = `${classes.control} ${
        formInputsValidity.street ? '' : classes.invalid
      }`;
      const postalCodeControlClasses = `${classes.control} ${
        formInputsValidity.postal ? '' : classes.invalid
      }`;
      const cityControlClasses = `${classes.control} ${
        formInputsValidity.city ? '' : classes.invalid
      }`;
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInput}/>
        {!formInputsValidity.name && <p>enter correct name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInput}/>
        {!formInputsValidity.street && <p>enter correct street</p>}
        </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInput}/>
        {!formInputsValidity.postal && <p>enter correct postal code</p>}
        </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city'ref={cityInput} />
        {!formInputsValidity.city && <p>enter correct city</p>}
        </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;