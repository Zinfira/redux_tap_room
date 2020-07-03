import React from 'react';
import { v4 } from 'uuid';

function NewKegForm() {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.brand.value);
    console.log(event.target.price.value);
    console.log(event.target.flavor.value);
    console.log(event.target.quantity.value);
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Kombucha name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          type='number'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

export default NewKegForm;
