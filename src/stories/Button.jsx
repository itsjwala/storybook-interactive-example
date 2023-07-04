import React from 'react';
import { useEffect } from 'react';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = () => {

  useEffect(() => {
      document.getElementById("button").addEventListener('click', () => {

        console.log('I was clicked');
      });
  })

  return (
    <button id='button'>
      Check Button
    </button>
  );
};
