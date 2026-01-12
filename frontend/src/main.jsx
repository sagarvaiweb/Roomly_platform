import { StrictMode } from 'react' ;
import { createRoot } from 'react-dom/client' ;
import App from './App.jsx' ;
import { BrowserRouter } from 'react-router-dom';

// Import Bootstrap CSS here at the top
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap JS here at the top
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Import Bootstrap CSS for icons
import "bootstrap-icons/font/bootstrap-icons.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)
