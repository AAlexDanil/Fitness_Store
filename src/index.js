import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './Category';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />

    <Category name="Kosttillskott" desc="This is a description for kosttillskott"/>

    <Category name="Kläder" desc="This is a description for Kläder"/>

    <Category name="Tillbehör" desc="This is a description for Tillbehör"/>

    <Footer/>
  </React.StrictMode>
);

