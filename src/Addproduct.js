function Addproduct() {

  const handleFileRead = async (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }


  return (
    <>

      <div className="d-flex align-items-center flex-direction-column w-100">

        <h1 className="mb-3 text-center"> Add Product Page</h1>
        <h3 className="mb-3 text-center"> Use this page to add a products to your categories</h3>

        <form className="w-50 mx-auto" onSubmit={() => console.log("Hello World")}>
          <select class="form-select my-4" aria-label="Default select example" id="catColor">
            <option value="0"> Category</option>
            <option value="1"> Kosttillskott </option>
            <option value="2"> Kläder </option>
            <option value="3"> Tillbehör </option>

          </select>
          <label for="pordName" className="form-label">
            Product Name
          </label>
          <input
            className="form-control"
            name="pordName"
            id="pordName"
            type="text"
          />
          <label for="prodDesc" className="form-label">
            Prodcut Description
          </label>
          <textarea
            className="form-control"
            name="prodDesc"
            id="prodDesc"
            type="text"
            rows="3"
          />

          <label for="prodPrice" className="form-label">
            Product Price
          </label>

          <input
            className="form-control"
            name="prodPrice"
            id="prodPrice"
            type="number"
          />

          <input
          className="form-control mt-3"
            id="originalFileName"
            type="file"
            inputProps={{ accept: 'image/*' }}
            label="Document"
            name="originalFileName"
            onChange={(e) => handleFileRead(e)}
            size="small"
            variant="standard"
          />

          <button className="btn border mt-3 w-100"> Take image</button>

          <input type="submit" className="form-control mt-4" />
        </form>
      </div>
    </>
  );
}

export default Addproduct;
