import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routers.jsx'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='px-2 max-w-6xl mx-auto'>
    <RouterProvider  router={router}></RouterProvider>
    </div>
    <Toaster />

  </React.StrictMode>,
)
