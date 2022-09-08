import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import App from './components/App';
import './assets/sass/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

