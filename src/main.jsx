import React, { useState } from "react";

import ReactDOM from 'react-dom/client'
import '/src/components/style/style.css'
import Editor from '/src/components/Editor.jsx'
import './index.css'
import GetTo100App from './getTo100/GetToo100App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GetTo100App/>
  </React.StrictMode>,
);
