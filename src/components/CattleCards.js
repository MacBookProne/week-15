import React from 'react';

function CattleCards() {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img src="../images/herd.jpg" className="card-img-top" alt="A herd of cattle" />
            <div className="card-body">
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">We're eager to connect with ranchers who are looking to make their operations more enjoyable and profitable.</p>
              <a href="/contact-us" className="btn btn-primary">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="../images/cowfield.jpg" className="card-img-top" alt="Cattle grazing in a field" />
            <div className="card-body">
              <h5 className="card-title">Cattle Directory</h5>
              <p className="card-text">Buy your bulls from someone who raises cattle the way you ought to. Click below to inquire</p>
              <a href="/cattle" className="btn btn-primary">Cattle Directory</a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="../images/blackandwhitecow.jpg" className="card-img-top" alt="A black and white cow" />
            <div className="card-body">
              <h5 className="card-title">About Us</h5>
              <p className="card-text">Our goal is to empower ranchers to inject more enjoyment and profitability into their operations.</p>
              <a href="/about-us" className="btn btn-primary">About Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CattleCards;
