'use client';

import { useState } from 'react';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { getRandomCharacters } from './utility';

export const PasswordGenerator = () => {
  const MIN_LENGTH = 8;
  const MAX_LENGTH = 16;
  const UPPERCASE_CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBER_CHARACTERS = '0123456789';
  const SPECIAL_CHARACTERS = '&@#$%!^*';

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(MIN_LENGTH);
  const [includeUpperCaseChars, setIncludeUpperCaseChars] = useState(true);
  const [includeLowerCaseChars, setIncludeLowerCaseChars] = useState(true);
  const [includeNumbericChars, setIncludeNumbericChars] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [isCopied, setIsCopied] = useState(false);

  const onChangePasswordLength = (e: any) => {
    setPasswordLength(e.target.value);
  };
  const onChangeIncludeUpperCaseChars = (e: any) => {
    setIncludeUpperCaseChars((includeUpperCaseChars) => !includeUpperCaseChars);
  };
  const onChangeIncludeLowerCaseChars = (e: any) => {
    setIncludeLowerCaseChars((includeLowerCaseChars) => !includeLowerCaseChars);
  };
  const onChangeIncludeNumericChars = (e: any) => {
    setIncludeNumbericChars((includeNumbericChars) => !includeNumbericChars);
  };
  const onChangeIncludeSpecialChars = (e: any) => {
    setIncludeSpecialChars((includeSpecialChars) => !includeSpecialChars);
  };
  const onClickCopyPassword = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(password);
  };
  const onClickGeneratePassword = () => {
    let totalAvailableCharacters = '';
    let passwordCharacters = '';
    if (includeUpperCaseChars) {
      totalAvailableCharacters += UPPERCASE_CHARACTERS;
      passwordCharacters += getRandomCharacters(UPPERCASE_CHARACTERS, 1)[0];
    }
    if (includeLowerCaseChars) {
      totalAvailableCharacters += LOWERCASE_CHARACTERS;
      passwordCharacters += getRandomCharacters(LOWERCASE_CHARACTERS, 1)[0];
    }
    if (includeNumbericChars) {
      totalAvailableCharacters += NUMBER_CHARACTERS;
      passwordCharacters += getRandomCharacters(NUMBER_CHARACTERS, 1)[0];
    }
    if (includeSpecialChars) {
      totalAvailableCharacters += SPECIAL_CHARACTERS;
      passwordCharacters += getRandomCharacters(SPECIAL_CHARACTERS, 1)[0];
    }
    const remainingLength = passwordLength - passwordCharacters.length;
    passwordCharacters += getRandomCharacters(totalAvailableCharacters, remainingLength);
    setIsCopied(false);
    setPassword(passwordCharacters);
  };

  return (
    <div
      id='password-generator-wrapper'
      className='p-4 w-full flex flex-col gap-5 text-base rounded text-white bg-gray-700'
    >
      <div id='password-output' className='flex justify-between items-center'>
        <div id='password-output-display' className='text-lg'>
          {password}
        </div>
        <Button id='btn-password-copy' onClick={onClickCopyPassword} displayText={isCopied ? 'COPIED' : 'COPY'} />
      </div>
      <Slider
        min={MIN_LENGTH}
        max={MAX_LENGTH}
        value={passwordLength}
        onChange={onChangePasswordLength}
        displayText='Password Length'
      />
      <div className='grid grid-cols-2 gap-2'>
        <Checkbox
          id='includeUpperCaseChars'
          displayText='Include Uppercase Characters'
          checked={includeUpperCaseChars}
          onChange={onChangeIncludeUpperCaseChars}
        />
        <Checkbox
          id='includeLowercaseChars'
          displayText='Include Lowercase Characters'
          checked={includeLowerCaseChars}
          onChange={onChangeIncludeLowerCaseChars}
        />
        <Checkbox
          id='includeNumbericChars'
          displayText='Include Numeric Characters'
          checked={includeNumbericChars}
          onChange={onChangeIncludeNumericChars}
        />
        <Checkbox
          id='includeSpecialChars'
          displayText='Include Special Characters'
          checked={includeSpecialChars}
          onChange={onChangeIncludeSpecialChars}
        />
      </div>
      <div id='password-strength' className='flex justify-between'>
        <span>Strength</span>
        <span>Medium</span>
      </div>
      <Button id='btn-generate-password' onClick={onClickGeneratePassword} displayText='GENERATE' />
    </div>
  );
};

type ButtonProps = {
  id: string;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  displayText: string;
};
const Button = ({ id, onClick, displayText }: ButtonProps) => {
  return (
    <button className='p-2 text-sm bg-green-700 shadow-lg uppercase rounded' onClick={onClick}>
      {displayText}
    </button>
  );
};

type CheckboxProps = {
  id: string;
  displayText: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
};
const Checkbox = ({ id, displayText, checked, onChange }: CheckboxProps) => {
  return (
    <div className='flex gap-2'>
      <input type='checkbox' id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{displayText}</label>
    </div>
  );
};

type SliderProps = {
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
  min: number;
  max: number;
  value: number;
  displayText: string;
};
const Slider = ({ onChange, min, max, value, displayText }: SliderProps) => {
  return (
    <div id='password-length-wrapper' className='flex flex-col flex-nowrap gap-2'>
      <div className='flex justify-between'>
        <div>{displayText}</div>
        <div>{value}</div>
      </div>
      <input onChange={onChange} type='range' value={value} min={min} max={max} step={1} />
    </div>
  );
};

/**
 * REFERENCES
 * https://stackoverflow.com/a/54363513/9294717
 */
