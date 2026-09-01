import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {AuthProvider} from './authContext.jsx'
import ProjectRoutes from './Routes.jsx'
import {BrowserRouter as Router } from 'react-router-dom'
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Router>
      {/* <App/> */}
      <ProjectRoutes />
    </Router>
  </AuthProvider>,
);
