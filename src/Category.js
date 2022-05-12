
function Category({name,desc}) {
    const img = "https://i.guim.co.uk/img/media/03ac0259bc751c9b186d9f5f71cefd36b051ae76/0_198_2254_2060/master/2254.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=61543c2dff47983f5550cdc2aeab42cb"
    return (
      <div className="Category mt-4">
        
        <div className='d-flex flex-direction-column bg-darkblue w-100' style={{height:"300px"}}> 
            <div className="d-flex justify-content-center w-100">
                <h1 className="text-white">{name}</h1>
            </div>

            <div className="d-flex flex-direction-column-sm justify-content-evenly align-items-center w-100 h-75">
                <div className="d-flex w-md-50 w-100 justify-content-center">
                    <p className="text-white">{desc}</p>
                </div>

                <div className="d-flex w-md-50 w-100 flex-direction-column-sm justify-content-end align-items-center h-75">
                    <div className="d-flex justify-content-center w-100 w-md-75 h-100">
                    <img src={img}  className="mx-3 w-25"></img>
                    <img src={img}  className="mx-3 w-25"></img>
                    <img src={img}  className="mx-3 w-25"></img>
                    </div>
                <div className="d-flex justify-content-center justify-content-lg-start align-items-center text-white h-100 view-more"> VIEW MORE {">>"}</div>
                </div>

            </div>
        </div>
      </div>
    );
  }
  
  export default Category;
  