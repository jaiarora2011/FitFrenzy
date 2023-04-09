import React from 'react'
import { Link } from 'react-router-dom'

function Navbar2() {
    return (
        <div><nav className="navbar fs-3 text-white navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link className="text-white navbar-brand fs-1" to="#">FitFrenzy</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="text-white nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className=" text-white nav-link" to="/Products">Products</Link>
                        </li>

                    </ul>
                    <form className="d-flex" role="search">
                        <input className="text-white form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <Link className="nav-link text-white active" aria-current="page" to="/Login">Login</Link>




                </div>
            </div>
        </nav></div>
    )
}

export default Navbar2