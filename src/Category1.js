
function Category1() {
    const img = "https://i.guim.co.uk/img/media/03ac0259bc751c9b186d9f5f71cefd36b051ae76/0_198_2254_2060/master/2254.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=61543c2dff47983f5550cdc2aeab42cb"
    return (
        <>
            <div className="w-100 d-flex flex-wrap justify-content-center align-items-center ps-3">

                 Filter by :
                <select className="form-select w-25 m-2" aria-label="Default select example">
                    <option>Price</option>
                    <option value="1">High - Low</option>
                    <option value="2">Low - High</option>
                </select>

                <select className="form-select w-25 m-2" aria-label="Default select example">
                    <option>Name</option>
                    <option value="1"> A - Z</option>
                    <option value="2"> Z - A</option>
                </select>


            </div>
            <div className="container w-full mx-auto">

                <div className="row">
                    <div className="col-2 d-lg-block d-none">

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Kosttillskott
                                <span className="badge">14</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Kläder
                                <span className="badge">10</span>
                            </li>

                            <li className="list-group-item d-flex justify-content-between align-items-center">
                                Gym Tillbehör
                                <span className="badge">32</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-10 col-12 overflow-auto">

                        <div className="d-flex w-full m-0 flex-wrap justify-content-center">
                            
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column bg-light w-30 ">
                                    <img src={img} className="mw-75"></img>
                                    <p className="">100kr</p>
                                </div>
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column bg-light w-30">
                                    <img src={img} className="  mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>

                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column  bg-light w-30">
                                    <img src={img} className="mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>
                            
                            
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column bg-light w-30">
                                    <img src={img} className="mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column  bg-light w-30">
                                    <img src={img} className="mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column  bg-light w-30">
                                    <img src={img} className="mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>
                            
                            
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column  bg-light w-30 ">
                                    <img src={img} className="mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column  bg-light w-30">
                                    <img src={img} className="mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>
                                <div className="mx-1 my-1 pt-3 d-flex justify-content-center align-items-center flex-direction-column  bg-light w-30">
                                    <img src={img} className="mw-75"></img>
                                    <p className="text-center">100kr</p>
                                </div>
                            
                        </div>


                    </div>
                </div>


            </div>




        </>
    );
}

export default Category1;
