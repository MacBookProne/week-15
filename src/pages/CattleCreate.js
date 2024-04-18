import React from "react";
import { Link } from "react-router-dom";

function CattleCreate() {
  return (
    <div>
      <div>
        <h1>Add Cattle</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4>Add Cattle </h4>
                  <Link to="/cattle" className="btn btn-danger">
                    Add Cattle
                  </Link>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CattleCreate;
