import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthProvider} from './authContext.jsx'
import ProjectRoutes from './Routes.jsx'
import {BrowserRouter as Router } from 'react-router-dom'
import App from "./App.jsx";


// flash message with toaster
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />


    <Router>
      {/* <App/> */}
      <ProjectRoutes />
    </Router>
  </AuthProvider>,
);
