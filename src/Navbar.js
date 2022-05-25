import {BsCart4}from "react-icons/bs";
import "./index.css";
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className='d-flex justify-content-between bg-light' style={{height:"150px"}}> 
      
      <div className="d-flex justify-content-center w-xs-75 w-sm-25 h-100 align-items-center" >
        <Link to='/' className="text-black">
        <h2 className="pt-4 ps-4 ps-lg-5">Fitness Store</h2>
        </Link>
      </div>
      
      <div className="d-flex justify-content-end w-25 h-100 ">
        <div className="d-flex flex-direction-column justify-content-center align-items-center pe-5">
          <div className="d-flex justify-content-center rounded-circle bg-danger text-white h-25 w-75 align-items-center">
            4
          </div>
          <BsCart4 size={60}/> 

        </div>
      </div>

      </div>
    </div>
  );
}

export default Navbar;