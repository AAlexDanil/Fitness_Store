
function Addcat() {
    return (
        <>
        <div className="d-flex align-items-center flex-direction-column w-100">

            <h1 className="mb-3 text-center"> Add Category Page</h1>
            <h3 className="mb-3 text-center"> Use this page to add a category to the webshop</h3>

            <form className="w-50 mx-auto" onSubmit={()=>console.log("Hello World")}>
                <label for="catName" className="form-label">
                    Category Name
                </label>
                <input
                    className="form-control"
                    name="catName"
                    id="catName"
                    type="text"
                />
                <label for="catDesc" className="form-label">
                    Category Description
                </label>
                <textarea
                    className="form-control"
                    name="catDesc"
                    id="catDesc"
                    type="text"
                    rows="3"
                />
                <label for="catColor" className="form-label">
                    Choose a Category Color
                </label>

                <select class="form-select" aria-label="Default select example" id="catColor">
                    <option value="0" className="bg-light">Pick a Color</option>
                    <option value="1" className="bg-red">Red </option>
                    <option value="2" className="bg-orange">Orange </option>
                    <option value="3" className="bg-yellow">Yellow</option>
                    <option value="4" className="bg-green">Green </option>
                    <option value="5" className="bg-blue text-white">Blue </option>
                    <option value="6" className="bg-indigo text-white">Indigo</option>
                    <option value="7" className="bg-violet">Violet</option>
                </select>
                <input type="submit" className="form-control mt-4" />
            </form>
            </div>
        </>
    );
}

export default Addcat;
