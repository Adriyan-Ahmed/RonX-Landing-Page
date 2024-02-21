import React from 'react'
import ReactDOM from 'react-dom/client'
import './Styles/index.css'
import { RouterProvider, } from "react-router-dom";
import Router from './Routes/Router.jsx';
import ScrollProvider from './Contexts/ScrollProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ScrollProvider>
      <RouterProvider router={Router} />
    </ScrollProvider>
  </React.StrictMode>,
)
