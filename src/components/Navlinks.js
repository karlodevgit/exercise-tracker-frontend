import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

const Navlinks = ({ highlight }) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid mx-sm-5">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className={`nav-link ${highlight === "loginpage" ? "active" : ""}`} to="/">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${highlight === "registerpage" ? "active" : ""}`} to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navlinks
