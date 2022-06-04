import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ConfigProvider } from 'antd';
import ptBR from 'antd/lib/locale/pt_BR';

import 'antd/dist/antd.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBR}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
