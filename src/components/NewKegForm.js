import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  const styledNewForm = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'left',
    marginTop: '2%',
    marginButtom: '2%'
  }

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, 
    brand: event.target.brand.value, 
    price: event.target.price.value,
    flavor: event.target.flavor.value,
    pintCount: 124,
    id: v4()});
  }

  return (
    <div style={styledNewForm}>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Kombucha name' />
          <br></br>
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
          <br></br>
        <input
          type='number'
          name='price'
          placeholder='Price' />
          <br></br>
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
          <br></br>
        <button className="add-button" type='submit'>Add Keg</button>
      </form>
    </div>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
