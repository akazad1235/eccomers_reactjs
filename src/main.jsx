import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from 'react-router-dom';
import AppRouter from './routes/AppRouter.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={AppRouter}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
)
