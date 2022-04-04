import React from 'react';
import validate from './Validation';
import useForm from './useForm';
import './App.css';


const Form = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    responseData
  } = useForm(calculate, validate);

  const label = 'Enter a numerical value'

  function calculate() {
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className='mb-3'>  
        <label
          className='form-label' 
          htmlFor='limit'>{label}</label>
        <input
          autoComplete='off'
          className={`input ${errors.limit && 'danger'}`}
          aria-invalid={errors.limit ? 'true' : 'false'}
          aria-describedby="limitHelpBlock"
          name='limit'
          id='limit'
          onChange={handleChange}
          value={values.limit || ''} /> 
        {errors.limit && ( 
            <div id="limitHelpBlock" className="form-text">
             {errors.limit}
          </div> 
          )}  
      </div>
      <button
        type='submit' 
        className='btn btn-primary btn-lg'>
        Submit
      </button>
      <div>{responseData}</div>
    </form>
  )
}


export default Form;