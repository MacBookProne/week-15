import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading.js";

function Cattle() {
  const [loading, setLoading] = useState(true);
  const [cattle, setCattle] = useState([]);

  useEffect(() => {
    fetch("https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale")
      .then((res) => res.json())
      .then((data) => {
        // Artificial delay
        setTimeout(() => {
          console.log("Success");
          setCattle(data);
          setLoading(false);
        }, 2000); // 2 seconds delay
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  var cattleDetails = "";
  cattleDetails = cattle.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.Id}</td>
        <td>{item.Lot}</td>
        <td>{item.Born}</td>
        <td>{item.Sire}</td>
        <td>{item.MGsire}</td>
        <td>{item.BasePrice}</td>
        <td>{item.BWTRatio}</td>
        <td>{item.forageTest}</td>
        <td>{item.EPD}</td>
        <td>{item.ScrotalCirc}</td>
        <td>{item.OverallRating}</td>
        <td>{item.Disposition}</td>
        <td>{item.CalvingEase}</td>
        <td>{item.Fleshing}</td>
        <td>{item.Thickness}</td>
        <td>
          <Link to="/" className="btn btn-success">
            Edit
          </Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <h1>Cattle</h1>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              {/* Use d-flex justify-content-between to space out the title and the button */}
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
                      <th>Scrotal Circ</th>
                      <th>Overall Rating</th>
                      <th>Calving Ease</th>
                      <th>Fleshing</th>
                      <th>Thickness</th>
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
