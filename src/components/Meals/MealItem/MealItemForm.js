import Input from '../../UI/Input';
import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
function MealItemForm(props)
{
    const [amountisValid, setAmountisValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => 
    {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5)
    {
        setAmountisValid(false);
        return;
    }
    console.log(enteredAmountNumber);
    props.onAddToCart(enteredAmountNumber);
    };
 return(<form className= {classes.form} onSubmit = {submitHandler}>
 <Input 
      ref = {amountInputRef}      
      label = "Amount" 
      input = {{
      id:'amount',
      type:'number',
      min: 1,
      max: 5,
      step: '1',
      defaultValue: '1'
      }}/>
  <button>+ Add</button>
  {!amountisValid && <p>Please Enter A VALID AMOUNT (1-5). </p>}
  </form>

 );

}

export default MealItemForm;