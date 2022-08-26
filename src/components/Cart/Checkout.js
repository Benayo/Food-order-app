// import React from "react";

// import classes from "./Checkout.module.css";
// import useInput from "../../hook/use-input";

// const isNotEmpty = (value) => value.trim() !== "";

// const Checkout = (props) => {
//   const {
//     value: nameValue,
//     isValid: nameIsValid,
//     hasError: nameHasError,
//     valueChangeHandler: nameChangeHandler,
//     inputBlurHandler: nameBlurHandler,
//     reset: resetName,
//   } = useInput(isNotEmpty);

//   const {
//     value: streetValue,
//     isValid: streetIsValid,
//     hasError: streetHasError,
//     valueChangeHandler: streetChangeHandler,
//     inputBlurHandler: streetBlurHandler,
//     reset: resetStreet,
//   } = useInput(isNotEmpty);

//   const {
//     value: cityValue,
//     isValid: cityIsValid,
//     hasError: cityHasError,
//     valueChangeHandler: cityChangeHandler,
//     inputBlurHandler: cityBlurHandler,
//     reset: resetCity,
//   } = useInput(isNotEmpty);

//   const {
//     value: postalCodeValue,
//     isValid: postalCodeIsValid,
//     hasError: postalCodeHasError,
//     valueChangeHandler: postalCodeChangeHandler,
//     inputBlurHandler: postalCodeBlurHandler,
//     reset: resetPostalCode,
//   } = useInput(isNotEmpty);

//   let formIsValid = false;

//   if (nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid) {
//     formIsValid = true;
//   }

//   const confirmHandler = (event) => {
//     event.preventDefault();

//     if (!formIsValid) {
//       return;
//     }
//     props.onSubmit({
//       name: nameValue,
//       street: streetValue,
//       city: cityValue,
//       postalCode: postalCodeValue,
//     });

//     resetName();
//     resetCity();
//     resetStreet();
//     resetPostalCode();
//   };

//   return (
//     <form className={classes.form} onSubmit={confirmHandler}>
//       <div className={classes.control}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           value={nameValue}
//           onChange={nameChangeHandler}
//           onBlur={nameBlurHandler}
//         />
//         {nameHasError && (
//           <div className={classes["error-text"]}>Name is Required!</div>
//         )}
//       </div>

//       <div className={classes.control}>
//         <label htmlFor="street">Street</label>
//         <input
//           type="text"
//           id="street"
//           value={streetValue}
//           onChange={streetChangeHandler}
//           onBlur={streetBlurHandler}
//         />
//         {streetHasError && (
//           <div className={classes["error-text"]}>Street is Required!</div>
//         )}
//       </div>
//       <div className={classes.control}>
//         <label htmlFor="postal">Postal Code</label>
//         <input
//           type="text"
//           id="postal"
//           value={postalCodeValue}
//           onChange={postalCodeChangeHandler}
//           onBlur={postalCodeBlurHandler}
//         />
//         {postalCodeHasError && (
//           <div className={classes["error-text"]}>PostalCode is Required!</div>
//         )}
//       </div>
//       <div className={classes.control}>
//         <label htmlFor="city">City</label>
//         <input
//           type="text"
//           id="city"
//           value={cityValue}
//           onChange={cityChangeHandler}
//           onBlur={cityBlurHandler}
//         />
//         {cityHasError && (
//           <div className={classes["error-text"]}>City is Required!</div>
//         )}
//       </div>
//       <div className={classes.actions}>
//         <button type="button" onClick={props.onCancel}>
//           Cancel
//         </button>
//         <button className={classes.submit}>Confirm</button>
//       </div>
//     </form>
//   );
// };

// export default Checkout;

import { useRef, useState } from 'react';

import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredCityIsValid &&
      enteredPostalCodeIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalCode,
    });
  };

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formInputsValidity.postalCode ? '' : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? '' : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code (5 characters long)!</p>
        )}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a valid city!</p>}
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
