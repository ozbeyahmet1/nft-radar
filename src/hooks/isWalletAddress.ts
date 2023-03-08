import { useState } from 'react';

const IsWalletAddress = (): [string, boolean, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
    const [value, setValue] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validateWalletAddress = (address: string): boolean => {
        // Regular expression to match Ethereum wallet addresses
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

export default IsWalletAddress;
