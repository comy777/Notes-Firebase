import { useState } from 'react';

function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);
  const handleInputChange = (name, value) => {
    setValues({
      ...values,
      [name]: value,
    });
  };
  const reset = () => setValues(initialState);
  return [values, handleInputChange, reset];
}

export default useForm;
