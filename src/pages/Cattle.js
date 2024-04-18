import React from 'react';
import { Link } from 'react-router-dom';

function Cattle() {
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
                <Link to="/" className="btn btn-primary">Add Cattle</Link>
              </div>
              <div className="card-body">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Weight</th>
                      <th>Color</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table body content */}
                  </tbody>
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
