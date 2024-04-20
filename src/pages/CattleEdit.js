//Imports
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

// Component for editing cattle details
function CattleEdit() {
    const { id } = useParams(); // Extracting 'id' from the route parameter to identify which cattle to edit
    const [cattle, setCattle] = useState({ // State holding the form values
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
    const [loading, setLoading] = useState(false); // State to manage loading status

    // Effect to fetch cattle data on component mount or when id changes
    useEffect(() => {
        setLoading(true);
        fetch(`https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale/${id}`) // API request using the cattle ID
            .then((res) => res.json())
            .then((data) => {
                setCattle(data); // Set fetched data to state
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error); // Handle any errors
                setLoading(false);
            });
    }, [id]);

    // Handler for input changes to update state
    const handleInput = (e) => {
        const { name, value } = e.target;
        setCattle(prevCattle => ({
            ...prevCattle,
            [name]: value // Update the specific field with the new value
        }));
    };

    // Handler for form submission to save edits
    const saveCattle = (e) => {
        e.preventDefault(); // Prevent default form submission action
        setLoading(true); // Begin loading

        // PUT request to update cattle on the server
        fetch(`https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cattle),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
            setLoading(false);
        })
        .catch(error => {
            console.error("Error:", error);
            setLoading(false);
        });
    };

    // Conditional rendering for loading state
    if (loading) {
        return <Loading /> // Display loading component during data fetch/update
    }

    // Main component render
    return (
        <div>
            <h1>Edit Cattle</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4>Edit Cattle Details</h4>
                                <Link to="/cattle" className="btn btn-danger">Back to Cattle List</Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveCattle}>
                                    {Object.keys(cattle).map((key) => (
                                        <div className="mb-3" key={key}>
                                            <label className="form-label">{key}</label>
                                            <input
                                                type="text"
                                                name={key}
                                                value={cattle[key] || ''}
                                                onChange={handleInput}
                                                className="form-control"
                                            />
                                        </div>
                                    ))}
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
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

export default CattleEdit;
