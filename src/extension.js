import React from 'react';
import ReactDOM from 'react-dom';
import { ExtensionProvider } from '@looker/extension-sdk-react';

import App from './App';

import './index.css';

window.addEventListener('DOMContentLoaded', async (event) => {
  const root = document.createElement('div');
  document.body.appendChild(root);

  ReactDOM.render(
    // ExtensionProvider provides subcomponents access to the Looker Extension SDK
    <ExtensionProvider
      requiredLookerVersion=">=7.0.0"
    >
      <App />
    </ExtensionProvider>,
    root
  );
});
