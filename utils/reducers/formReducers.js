export const  reducer = (state, action) => {
  const { validationResult, inputId, inputValue } = action
  console.log('validationResult:', validationResult)
  // state.formIsValid = validationResult === undefined;
  const updatedValues ={
    ...state.inputValues,
    [inputId]: inputValue
  }
  const updatedValidities ={
    ...state.inputValidities,
    [inputId]: validationResult
  }

  let UpdatedFormIsValid = true

  for(const key in updatedValidities) {
    if(updatedValidities[key] !== undefined) {
      UpdatedFormIsValid = false
      break;
    }
  }
  return {
    inputValues: updatedValues,
    inputValidities: updatedValidities,
    // ...state,
    // formIsValid: validationResult === undefined 
    formIsValid: UpdatedFormIsValid 
  }
}