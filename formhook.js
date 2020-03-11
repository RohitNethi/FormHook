import { useState } from 'react';

const useForm = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleSubmitForm = (event) => {
    if (event) event.preventDefault();
    callback(inputs);
  };
  const handleInputChange = (event) => {
    event.persist();
    setInputs(newinputs => ({ ...newinputs, [event.target.name]: event.target.value }));
  };
  const handleInputObjectChange = (event, newObj) => {
    event.persist();
    setInputs(newinputs => ({ ...newinputs, [event.target.name]: newObj }));
  };
  return {
    handleSubmitForm,
    handleInputChange,
    handleInputObjectChange,
    inputs,
  };
};
export default useForm;
