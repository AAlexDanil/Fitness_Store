import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from './Category';
import Footer from './Footer';
import Category1 from './Category1';
import ProductPage from './ProductPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>

      <Routes>
        <Route exact path="/" element={
          <>
            <Navbar />

            <Category name="Kosttillskott" desc="This is a description for kosttillskott" />

            <Category name="Kläder" desc="This is a description for Kläder" />

            <Category name="Tillbehör" desc="This is a description for Tillbehör" />

            <Footer />
          </>

        } />
        <Route path='/kosttillskot' element={
          <>
            <Navbar />

            <Category1 />

            <Footer />
          </>
        } />
        <Route path='/klader' element={
          <>
            <Navbar />

            <Category1 />

            <Footer />
          </>
        } />
        <Route path='/tillbehor' element={
          <>
            <Navbar />

            <ProductPage />

            <Footer />
          </>
        } />
      </Routes>
    </Router>
  </React.StrictMode>
);

