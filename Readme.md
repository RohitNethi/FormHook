# Usage 

## Initialization
```
import useForm from 'form-hook.js';
const { inputs, handleInputChange, handleSubmitForm, handleInputObjectChange } = useForm(
    initialValues, callbackFn,
  );
```
## In Action
```
const { inputs, handleInputChange, handleSubmitForm, handleInputObjectChange } = useForm(
    {
        first_name: ''
    },  callbackFn,
);
  
  <input
        name="first_name"
        value={inputs.first_name}
        onChange={handleInputChange}
  />
```
