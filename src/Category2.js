import axios from "axios";
import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import Category1 from "./Category1";

function Category2({ category }) {

    const filterArrayHighToLow = (arr) => {
        var temp = arr;
        var y;
        for (var i = 0; i < arr.length; i++) {
            for (var x = i + 1; x < arr.length; x++) {
                if (Number(temp[i].price) < Number(temp[x].price)) {
                    y = temp[i]
                    temp[i] = temp[x]
                    temp[x] = y
                }
            }
        }
        return (temp)

    }


    const filterArrayLowToHigh = (arr) => {
        var temp = arr;
        var y;
        for (var i = 0; i < arr.length; i++) {
            for (var x = i + 1; x < arr.length; x++) {
                if (Number(temp[i].price) > Number(temp[x].price)) {
                    y = temp[i]
                    temp[i] = temp[x]
                    temp[x] = y
                }
            }
        }
        return (temp)
    }


    const filterArrayAss = (arr) => {
        var temp = arr;
        var y;
        for (var i = 0; i < arr.length; i++) {
            for (var x = i + 1; x < arr.length; x++) {
                if (temp[i].prodName.charCodeAt(0) > temp[x].prodName.charCodeAt(0)) {
                    y = temp[i]
                    temp[i] = temp[x]
                    temp[x] = y
                }
            }
        }
        return (temp)
    }


    const filterArrayDes = (arr) => {
        var temp = arr;
        var y;
        for (var i = 0; i < arr.length; i++) {
            for (var x = i + 1; x < arr.length; x++) {
                if (temp[i].prodName.charCodeAt(0) < temp[x].prodName.charCodeAt(0)) {
                    y = temp[i]
                    temp[i] = temp[x]
                    temp[x] = y
                }
            }
        }
        return (temp)
    }

    if (!(JSON.parse(sessionStorage.getItem("filter")))) {
        filter = 0
    } else {
        var filter = JSON.parse(sessionStorage.getItem("filter"));
    }

 
    var myProds = JSON.parse(sessionStorage.getItem("myProds"));
    var products = [];
    for(var i = 0; i < myProds.length;i++){
        if( myProds[i].prodCat === category){
            products.push(myProds[i])
        }
    }
    console.log(filter)
    if(filter){
        if(filter === "1"){
            products = filterArrayHighToLow(products)
        }else if (filter === "2"){
            console.log('test')
            products = filterArrayLowToHigh(products)
        }else if (filter === "3"){
            products = filterArrayAss(products)
        }else if (filter ==="4"){
            products = filterArrayDes(products)
        }

    }




{console.log(products)}

    function displayCats(cats) {
        if (cats) {
            for(var i = 0; i < cats.length; i++){
                if (cats[i].products.length === 0){
                  cats.splice(i,1)
                }
              }
            const categories = cats.map(({ id, catName, catDesc, color, products }) =>


                <li className="list-group-item d-flex justify-content-between align-items-center cursor-pointer">
                    <Link className="text-black" to={"/" + catName + id} onClick={() => window.reload()}>
                        {catName}
                    </Link>

                </li>


            )
            return (
                <ul className="list-group list-group-flush">

                    {categories}

                </ul>)
        } else {
            return (<p className="text-center"> Loading....</p>)
        }
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        sessionStorage.setItem("filter", JSON.stringify(e.target.value))
        window.location.reload()
    }



    return (

        <>
            <div className="container w-full mx-auto">
                <div className="w-100 d-flex flex-wrap justify-content-center align-items-center ps-3">

                    Filter by :
                    <select className="form-select w-25 m-2" aria-label="Default select example" onChange={(e)=>handleChange(e)} value={filter < 3 ? filter : "0"}>
                        <option value="0">Price</option>
                        <option value="1" >High - Low</option>
                        <option value="2" >Low - High</option>
                    </select>

                    <select className="form-select w-25 m-2" aria-label="Default select example" onChange={(e)=>handleChange(e)} value={filter > 2 ? filter : "0"}>
                        <option value="0">Name</option>
                        <option value="3"> A - Z</option>
                        <option value="4"> Z - A</option>
                    </select>

                </div>
                <div className="row">
                    <div className="col-2 d-lg-block d-none">
                        {displayCats(JSON.parse(sessionStorage.getItem("myCats")))}
                    </div>

                    <Category1 category={category} products={products}></Category1>

                </div>

            </div>
        </>
    )
}

export default Category2;
