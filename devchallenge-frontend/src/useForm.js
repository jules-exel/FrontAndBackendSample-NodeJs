import { useState, useEffect } from 'react';
import axios from 'axios';

const useForm = (callback, validate) => {

  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [responseData, setResponse] = useState()
  const baseUrl = "http://localhost:8080/api/"

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [callback, errors, isSubmitting, values, isSuccess, responseData])

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true);

    const data = { limit: values.limit }
    axios.post(baseUrl, data)
      .then((result) => {
        setIsSubmitting(false)
        setIsSuccess(true)
        if (result.data.status) { 
          setResponse(result.data.data)
          console.log(result.data)
        }
        else
          console.log(result)
      }).catch((error) => {
        setIsSubmitting(false)
        setIsSuccess(false)
        console.log(error)
      });

  };

  const handleChange = (event) => { 
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    responseData
  }
};

export default useForm;