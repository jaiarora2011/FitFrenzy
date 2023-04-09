import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';
function Login() {
    const [email,changemail]=useState("");
    const [pass,changepass]=useState("");
    function handleSubmit(){
        const user = {email,pass}
        if(email && pass){
            axios.post("http://localhost:5000/login", user)
            .then( res => {
                alert(res.data.message)
            }).catch(err=>console.log(err))
        } else {
            alert("invlid input")
        }
    }

    
    return (
        <div className='login'>
            <section className="vh-100 m-4">
                <div className="container h-120">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-white" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign In</p>

                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={email} type="email" id="form3Example3c" onChange={(e)=>{
                                                            changemail(e.target.value);
                                                            // console.log(email);
                                                        }} className="form-control" />
                                                        <label className="form-label"  for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={pass} type="password" id="form3Example4c" onChange={function(e){
                                                            changepass(e.target.value);
                                                        }} className="form-control" />
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>



                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <label className="form-check-label" for="form2Example3">
                                                        Not a member?<Link to="/register"> Register</Link>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login