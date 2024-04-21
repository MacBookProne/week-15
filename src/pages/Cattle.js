// Imports
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading.js";

// Cattle component
function Cattle() {

  // state variables for loading and cattle data
  const [loading, setLoading] = useState(true);
  const [cattle, setCattle] = useState([]);

  // useEffect to fetch cattle data when the component mounts
  useEffect(() => {
    fetch("https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale")
      .then((res) => res.json())
      .then((data) => {
        // Artificial delay of 2 seconds
        setTimeout(() => {
          console.log("Success");
          setCattle(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Define a function to delete a cattle record
  const deleteCattle = (e, Id) => {
    e.preventDefault();

    // Confirm the deletion with the user
    if (!window.confirm("Are you sure you want to delete this record?")) {
      return;
    }

    // Start deleting process
    const thisClicked = e.currentTarget;
    thisClicked.innerText = "Deleting...";

    fetch(`https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale/${Id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      // Successfully deleted, filter out the deleted record from cattle data
      setCattle(cattle.filter(item => item.Id !== Id));
      console.log("Deleted successfully");
    })
    .catch(error => {
      console.error('Error:', error);
      alert("There was an error deleting the cattle.");
      thisClicked.innerText = "Delete";
    });
  }

  // Show loading component while data is being fetched
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // Map over the cattle data to create table rows for each record
  var cattleDetails = cattle.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.Id}</td>
        <td>{item.Lot}</td>
        <td>{item.Born}</td>
        <td>{item.Sire}</td>
        <td>{item.MGsire}</td>
        <td>{item.BasePrice}</td>
        <td>{item.BwtRatio}</td>
        <td>{item.forageTest}</td>
        <td>{item.EPD}</td>
        <td>{item.OverallRating}</td>
        <td>{item.CalvingEase}</td>
        <td>{item.Fleshing}</td>
        <td>
          <Link to={`/cattle/${item.Id}/edit`} className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <button type="button" onClick={(e) => deleteCattle(e, item.Id)} className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });

  // Render the component
  return (
    <div>
      <h1 className="cattle-header">Cattle lots for sale</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <h4>Cattle List</h4>
                <Link to="/cattle/create" className="btn btn-primary">
                  Add Cattle
                </Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Lot</th>
                      <th>Born</th>
                      <th>Sire</th>
                      <th>MGsire</th>
                      <th>Base Price</th>
                      <th>B.Wt. Ratio</th>
                      <th>Forage Test</th>
                      <th>EPD</th>
                      <th>Overall Rating</th>
                      <th>Calving Ease</th>
                      <th>Fleshing</th>
                    </tr>
                  </thead>
                  <tbody>{cattleDetails}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cattle;