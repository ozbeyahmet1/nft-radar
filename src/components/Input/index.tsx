import { useState } from 'react';
import styles from './input.module.css';
import { CiSearch } from 'react-icons/ci';
import isWalletAddress from '@/hooks/isWalletAddress';

type IInputProps = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  fetchNfts: () => Promise<void>;
};

export default function Input({
  setInputValue,
}: IInputProps) {
  const [value, isValid, handleChange] = isWalletAddress();
  const [error, setError] = useState<boolean>(false);
  const sendData = () => {
    if (!isValid) {
      setError(true);
      return;
    }
    setError(false);
    setInputValue(value);
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      sendData();
    }
  };

  return (
    <div className={styles['inputContainer']}>
      <div
        className={
          !error ? styles['inputWrapper'] : styles['inputWrapper--error']
        }
      >
        <label htmlFor="searchNft">
          <CiSearch size={30} color="white" />
        </label>
        <input
          type="text"
          name=""
          id="searchNft"
          className={styles['input']}
          placeholder="Search NFT"
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
      </div>
      {error && (
        <h4 className={styles['inputWrapper_errorField']}>
          Please enter valid wallet address
        </h4>
      )}
    </div>
  );
}
