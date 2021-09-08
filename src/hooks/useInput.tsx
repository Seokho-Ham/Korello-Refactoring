import React, { ChangeEvent, useState } from 'react';

const useInput = (
  val: string,
): [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: ChangeEvent<HTMLInputElement>) => void,
] => {
  const [value, setValue] = useState(val);
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, setValue, inputHandler];
};

export default useInput;
