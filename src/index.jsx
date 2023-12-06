import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n'

import App from './App';

// Import css files bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//primereact
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
        
// react slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
// Import css files aos
import 'aos/dist/aos.css'; 
import './style/index.scss'; 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <App /> 
);

