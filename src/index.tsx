import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import App from './App';

createRoot(document.getElementById('root')!)
  .render(<App />);
