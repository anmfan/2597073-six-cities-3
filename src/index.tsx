import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './component/App/App.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App amountPlacesRent={312}/>
  </React.StrictMode>
);
