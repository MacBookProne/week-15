import React, { useState } from "react";
import { Link } from "react-router-dom";

function CattleCreate() {
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
    ScrotalCirc: "",
    OverallRating: "",
    Disposition: "",
    CalvingEase: "",
    Fleshing: "",
    Thickness: "",
    Masculinity: "",
  });

  const handleInput = (e) => {
    e.persist();
    setCattle((prevCattle) => ({
      ...prevCattle,
      [e.target.name]: e.target.value,
    }));
  };

  const saveCattle = (e) => {
    e.preventDefault();

    // Posting the form data
    fetch("https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cattle),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        setCattle({
          ID: "",
          Lot: "",
          Born: "",
          Sire: "",
          MGsire: "",
          BasePrice: "",
          BWTRatio: "",
          forageTest: "",
          EPD: "",
          ScrotalCirc: "",
          OverallRating: "",
          Disposition: "",
          CalvingEase: "",
          Fleshing: "",
          Thickness: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <h1>Add Cattle</h1>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4>Add Cattle</h4>
                  <Link to="/cattle" className="btn btn-danger">
                    Back to Cattle
                  </Link>
                </div>
                <div className="card-body">
                  <form onSubmit={saveCattle}>
                    <div className="mb-3">
                      <label>Id</label>
                      <input type="text" name="ID" value={cattle.id} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Lot</label>
                      <input type="text" name="Lot"value={cattle.lot} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Born</label>
                      <input type="text" name="Born" value={cattle.born} onChange={handleInput}className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Sire</label>
                      <input type="text" name="Sire" value={cattle.sire} onChange={handleInput}className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>MGsire</label>
                      <input type="text" name="MGsire" value={cattle.MGsire} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Base Price</label>
                      <input type="text" name="BasePrice" value={cattle.BasePrice} onChange={handleInput}className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>BWTRatio</label>
                      <input type="text" name="BWTRatio" value={cattle.BWTRatio} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Forage Test</label>
                      <input type="text" name="forageTest" value={cattle.forageTest} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>EPD</label>
                      <input type="text" name="EPD" value={cattle.EPD} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Scrotal Circumference</label>
                      <input type="text" name="ScrotalCirc" value={cattle.ScrotalCirc} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Overall Rating</label>
                      <input type="text" name="OverallRating" value={cattle.OverallRating} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Disposition</label>
                      <input type="text" name="Disposition" value={cattle.Disposition} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Calving Ease</label>
                      <input type="text" name="CalvingEase" value={cattle.CalvingEase} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Fleshing</label>
                      <input type="text" name="Fleshing" value={cattle.Fleshing} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Thickness</label>
                      <input type="text" name="Thickness" value={cattle.Thickness} onChange={handleInput} className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label>Masculinity</label>
                      <input type="text" name="Masculinity" value={cattle.Masculinity} onChange={handleInput} className="form-control" />
                    </div>
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
    </div>
  );
}

export default CattleCreate;
