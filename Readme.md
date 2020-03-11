# Usage 

## Initialization
```
import useForm from 'form-hook.js';
const { inputs, handleInputChange, handleSubmitForm, handleInputObjectChange } = useForm(
    {
      first_name: '',
      last_name: '',
      password: '',
    }, callbackFn(),
  );
```
## In Form
```
  <input
        name="first_name"
        value={inputs.first_name}
        onChange={handleInputChange}
  />
```
