import React from "react";

function Accordion() {
    return (
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        What makes our cattle company different from others?
                        </button>
                    </h2>
                </div>
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                    At North Fork Cattle Company, we pride ourselves on sustainable and ethical practices that set us apart. We implement innovative farming techniques to ensure the health and happiness of our cattle, which directly translates to the quality of beef we provide. Our commitment to transparency means we welcome visitors to our ranch to witness first-hand the care we put into every aspect of our operations.

</div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        How do you ensure the quality of your cattle?
                        </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                    Quality is the cornerstone of our business. Our cattle are raised on a diet of natural grasses and grains without the use of hormones or unnecessary antibiotics. We follow rigorous health protocols and regularly engage with veterinary experts to maintain superior animal health and welfare. Our ranch operates under stringent quality control measures, adhering to both local and national livestock standards.
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Can I visit your ranch to see your cattle-rearing practices?
                        </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                    Absolutely! We believe in complete transparency and are proud to showcase our cattle-rearing practices. We offer scheduled tours that provide an in-depth look at our day-to-day operations, our cattle's living conditions, and our approach to sustainable ranching. To arrange a visit, please contact us through our website or call our main office during business hours.</div>
                </div>
            </div>
        </div>
    );
}

export default Accordion;
