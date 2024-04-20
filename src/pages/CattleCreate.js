// Imports
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

function CattleCreate() {
// Hook to programmatically navigate
  const navigate = useNavigate();

  // State to hold cattle form data
  const [cattle, setCattle] = useState({
    ID: "",
    Lot: "",
    Born: "",
    Sire: "",
    MGsire: "",
    BasePrice: "",
    BWTRatio: "",
    forageTest: "",
    EPD: "",
    OverallRating: "",
    CalvingEase: "",
    Fleshing: "",
    Thickness: "",
  });

  // State to manage loading status
  const [loading, setLoading] = useState(false);

  // Handler for form inputs, updates state on change
  const handleInput = (e) => {
    e.persist(); // Persist event due to asynchronous state update
    setCattle((prevCattle) => ({
      ...prevCattle,
      [e.target.name]: e.target.value,
    }));
  };

  // Function to handle form submission
  const saveCattle = (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Indicate loading process starting

    // POST request to API to save cattle data
    fetch("https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cattle),
    })
    .then((response) => response.json()) // Parse JSON response
    .then((data) => {
      console.log("Success:", data); // Log success data
      setTimeout(() => {
        navigate("/cattle"); // Navigate back to cattle list after 1 second
        setCattle({ // Reset form fields after successful save
          ID: "",
          Lot: "",
          Born: "",
          Sire: "",
          MGsire: "",
          BasePrice: "",
          BWTRatio: "",
          forageTest: "",
          EPD: "",
          OverallRating: "",
          CalvingEase: "",
          Fleshing: "",
          Thickness: "",
          Masculinity: "",
        });
        setLoading(false);
      }, 1000); // Delay of 1 second
    })
    .catch((error) => {
      console.error("Error:", error);
      setLoading(false); // Stop loading on error
    });
  };

  // Render loading component if in loading state
  if (loading) {
    return <Loading />
  }


  return (
    <div>
      <h1>Add Cattle</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>Add Cattle</h4>
                <Link to="/cattle" className="btn btn-danger">Back to Cattle</Link>
              </div>
              <div className="card-body">
                <form onSubmit={saveCattle}> {/* Form submission handler */}
                  {Object.keys(cattle).map(key => (
                    <div className="mb-3" key={key}>
                      <label>{key}</label>
                      <input type="text" name={key} value={cattle[key]} onChange={handleInput} className="form-control" />
                    </div>
                  ))}
                  <div className="mb-3">
                    <button className="btn btn-primary">Save Cattle</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CattleCreate;
