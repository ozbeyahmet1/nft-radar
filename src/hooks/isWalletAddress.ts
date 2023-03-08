// Import the useState hook from the React library
import { useState } from 'react';

// Define a custom React hook named IsWalletAddress that returns an array
// containing the current value of the input field, a boolean indicating whether
// the value is a valid wallet address, and a function to handle changes to the input field.
const IsWalletAddress = (): [
  string,
  boolean,
  (event: React.ChangeEvent<HTMLInputElement>) => void
] => {

  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);


  const validateWalletAddress = (address: string): boolean => {
    const regex = /^0x[a-fA-F0-9]{40}$/;
    return regex.test(address);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setValue(newValue);
    setIsValid(validateWalletAddress(newValue));
  };


  return [value, isValid, handleChange];
};

// Export the IsWalletAddress hook so it can be used in other components.
export default IsWalletAddress;
