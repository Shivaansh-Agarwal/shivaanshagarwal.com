'use client';

export const getRandomCharacters = (list: string, length: number = 1) => {
  const randomNumberArr = new Uint32Array(length);
  window.crypto.getRandomValues(randomNumberArr);
  return Array.from(randomNumberArr)
    .map((randomNumber) => list[randomNumber % list.length])
    .join('');
};
