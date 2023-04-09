import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function Login() {
    const [email,changemail]=useState("");
    const [pass,changepass]=useState("");
    const [repeatpass,changereppass]=useState("");
    const [name,changename]=useState("");
    function handleSubmit(){
        const user = {name,email,repeatpass,pass}
        if( name && email && pass && (pass === repeatpass)){
            axios.post("http://localhost:5000/register", user)
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

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={name} onChange={function(e){
                                                            changename(e.target.value);
                                                        }} type="text" id="form3Example1c" className="form-control" />
                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={email} onChange={function(e){
                                                            changemail(e.target.value);
                                                        }} type="email" id="form3Example3c" className="form-control" />
                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={pass} onChange={function(e){
                                                            changepass(e.target.value);
                                                        }} type="password" id="form3Example4c" className="form-control" />
                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input value={repeatpass} onChange={function(e){
                                                            changereppass(e.target.value);
                                                        }} type="password" id="form3Example4cd" className="form-control" />
                                                        <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <label className="form-check-label" for="form2Example3">
                                                       Already have an account ?<Link to="/login"> Login</Link>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button onClick={handleSubmit} type="button" className="btn btn-primary btn-lg">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://images.unsplash.com/photo-1607000975574-0b425df6975a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
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