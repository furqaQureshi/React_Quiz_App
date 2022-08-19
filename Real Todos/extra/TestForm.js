import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux/index";
import { bindActionCreators } from "redux";
function TestForm() {
  const List = useSelector((state) => state.user);
  // console.log(List);
  const dispatch = useDispatch();
  const { addData } = bindActionCreators(actionCreators, dispatch);

  const initial = { name: "", location: "", data: "", units: "", types: "", point: "" };
  const [formValues, setFormValues] = useState(initial);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // addData(List);
    setFormErrors(formValues);
  };
  return (
    <div>
      <h1 className="text-center">Enter Your Name</h1>
      <form onSubmit={handleSubmit}>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md">
              <input
                type="text"
                className="form-control"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="name"
              />
            </div>
            <div className="col-md">
              <input
                type="text"
                className="form-control"
                name="location"
                value={formValues.location}
                onChange={handleChange}
                placeholder="location"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md">
              <input
                type="date"
                className="form-control"
                name="data"
                value={formValues.data}
                onChange={handleChange}
                placeholder="data"
              />
            </div>
            <div className="col-md">
              <input
                type="number"
                className="form-control"
                name="units"
                value={formValues.units}
                onChange={handleChange}
                placeholder="units"
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md">
              <div>
                {/* <input type="text" /> */}
                <select name="types" value={formValues.types} onChange={handleChange}>
                  <option value="dog">Dog</option>
                  <option value="cat">Cat</option>
                  <option value="parrot">Parrot</option>
                </select></div>
            </div>
            <div className="col-md">
              <input
                type="number"
                className="form-control"
                name="point"
                value={formValues.point}
                onChange={handleChange}
                placeholder="point"
              />
            </div>
          </div>
          <button
            className="btn btn-danger mt-4"
            onClick={() => addData(formValues)}
          >
            Submit
          </button>
        </div>
      </form>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
    </div>
  );
}

export default TestForm;
