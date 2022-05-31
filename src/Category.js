
import React, { useState, useEffect } from "react";
function Category({ name, desc, color, img1, img2, img3 }) {
    function displayImg (data) {
       return <img className="mx-3 w-25" alt="test" src={`data:image/png;base64,${data}`} />
    } 

    function loading(item){
        if(item){
           return displayImg(item.prodImg)
        }
        return <p className="text-center"> Loading ...</p>
    }
    var products = JSON.parse(sessionStorage.getItem("myProds"));


    for(var i = 0; i < products.length ;i++){
        if(products[i].id === img1){
            var image = products[i]
        }
        if(products[i].id === img2){
            var image1 = products[i]
        }
        if(products[i].id === img3){
            var image2 = products[i]
        }
    }



    return (
        <div className="Category mt-4">

            <div className='d-flex flex-direction-column w-100' style={{ height: "300px", backgroundColor: color }}>
                <div className="d-flex justify-content-center w-100">
                    <h1 className="text-black">{name}</h1>
                </div>

                <div className="d-flex flex-direction-column-sm justify-content-evenly align-items-center w-100 h-75">
                    <div className="d-flex w-md-50 w-100 justify-content-center">
                        <p className="text-black">{desc}</p>
                    </div>

                    <div className="d-flex w-md-50 w-100 flex-direction-column-sm justify-content-end align-items-center h-75">
                        <div className="d-flex justify-content-center w-100 w-md-75 h-100">
                        {loading(image)}
                        {loading(image1)}
                        {loading(image2)}
        
                        </div>
                        <div className="d-flex justify-content-center justify-content-lg-start align-items-center text-black h-100 view-more"> VIEW MORE {">>"}</div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Category;
