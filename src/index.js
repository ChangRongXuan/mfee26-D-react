import React from 'react';
import ReactDOM from 'react-dom/client'; //才可以做虛擬DOM(ReactVirtualDOM) 
import App from './App';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);