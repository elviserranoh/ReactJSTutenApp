import { useState } from "react";

const useForm = (initialState = {}) => {
  const [state, setState] = useState(initialState);

  const handleInputChanged = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const reset = () => {
    setState(initialState);
  };

  return [state, handleInputChanged, reset];
};

export default useForm;
