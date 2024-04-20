import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/Loading";

function CattleEdit() {
    const { id } = useParams();
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
        Masculinity: "",
    });
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://662179fe27fcd16fa6c710e9.mockapi.io/cattle/api/v1/BullSale/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setCattle(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [id]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCattle(prevCattle => ({
            ...prevCattle,
            [name]: value
        }));
    };

    const saveCattle = (e) => {
        e.preventDefault();
        setLoading(true);

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

    if (loading) {
        return <Loading />
    }

    return (
        <div>
            <h1>Edit Cattle</h1>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4>Edit Cattle Details</h4>
                                <Link to="/cattle" className="btn btn-danger">
                                    Back to Cattle List
                                </Link>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveCattle}>
                                    {/* Dynamically create form fields */}
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
