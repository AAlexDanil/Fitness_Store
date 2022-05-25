import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

} from "react-router-dom";

import Navbar from './Navbar';
import Category from './Category';
import Footer from './Footer';
import Category2 from './Category2';
import ProductPage from './ProductPage';
import Addcat from './Addcat';
import Addproduct from './Addproduct';


function App() {

  const [cats, setCats] = useState(null)

  const getCats = async () => {
    try {
      const response = await axios.get('http://localhost:8000/getCat')
      setCats(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!cats) {
      getCats()
    }

  }, [])


  const [products, setProducts] = useState(null);


  const getProd = async () => {
    try {

      const response = await axios.get('http://localhost:8000/getProd')
      setProducts(response.data)



    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!products) {
      getProd()
    }

  }, [])
  function displayCats(cats) {
    if (cats) {
      const categories = cats.map(({ id, catName, catDesc, color, products }) =>
        <Link className="link" to={"/" + catName + id}>
          <Category name={catName} desc={catDesc} color={color} img1={products[0]} img2={products[1] ? products[1] : products[0]} img3={products[2] ? products[2] : products[0]} />
        </Link>
      )
      return (categories)
    } else {
      return (<p className="text-center"> Loading....</p>)
    }
  }

  function displayLinks(cats) {
    if (cats) {
      const links = cats.map(({ id, catName, products }) =>
        <Route exact path={'/' + catName + id} element={
          <>
            <Navbar />

            <Category2 category={catName} />

            <Footer />
          </>
        } />
      )
      return (
        links
      )
    }
  }

  function displayLinksProd(products) {
    if (products) {
      const links = products.map(({ id, prodName, prodDesc, price, prodImg, prodCat }) =>
        <Route exact path={'/' + prodCat + '/' + prodName.replaceAll(' ', '%20') + id} element={
          <>
            <Navbar />

            <ProductPage name={prodName} desc={prodDesc} price={price} img={prodImg} catName={prodCat} />

            <Footer />
          </>
        } />
      )
      return (
        links
      )
    }
  }

  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={
            <>
              <Navbar />

              {displayCats(cats)}

              <Footer />
            </>

          } />


          {displayLinks(cats)}

          {displayLinksProd(products)}

          <Route exact path='/backend/add-cat' element={
            <>
              <Addcat />
            </>
          } />


          <Route exact path='/backend/add-product' element={
            <>
              <Addproduct />
            </>
          } />
        </Routes>
      </Router>

    </>
  );
}

export default App;
