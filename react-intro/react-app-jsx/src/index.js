import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const rootElement = document.querySelector('#root');

const root = createRoot(rootElement);

const elem = (
  <div className='greeting'>
    <h1 className='greeting__title'>Hello, world!</h1>
    <p className='greeting__text'>I am learning React</p>
  </div>
);

root.render(elem);