import React, { ChangeEvent, useState } from 'react';

const useInput = (val: string): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(val);
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, inputHandler];
};

export default useInput;
