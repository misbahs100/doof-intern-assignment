import React from 'react';
import './Login.css';
import login from '../images/Login.png';

const Login = () => {
    return (
        <div className="background  my-5">
            <div className="login container my-auto" style={{ border: '1px solid red' }}>
                {/* <div className="row " style={{ border: '1px solid green', height: '50px', margin: '10px' }}>
                    <div className="col-md-12 d-flex justify-content-between">
                        <button className="btn btn-warning test">Test</button>
                        <button className="btn btn-warning test">Test</button>
                    </div>
                </div>
                <div className="row" style={{ border: '1px solid red' }}>
                    <div className="col-md-6"></div>
                    <div className="col-md-6">

                        <button className="btn btn-warning test">Test</button>
                        <h5>Unlock your stuck revenue.</h5>
                        <img className="login-img" src={login} alt="" />
                    </div>
                </div>
                
                <div className="div" style={{ border: '1px solid red' }}> terms </div> */}

                <div className="row container" >
                <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="d-flex justify-content-start test"><h1>DOOF</h1></div>
                        <div className="mt-5">
                            <h4>Login</h4>
                            <form action="">
                                <label htmlFor="">Email</label><br />
                                <input type="email" name="" id="" />
                                <br /><br />
                                <label htmlFor="Password">Password</label><br />
                                <input type="password" name="" id="" /> <small>Forgot Password</small>
                                <br />
                                <br />
                                <button className="btn btn-warning w-50" type="submit">Login</button>
                            </form>
                            <p>Don’t have an account yet? <a href="#">Signup</a></p>
                            
                        </div>
                        
                        <div className="" style={{marginTop: '30%'}}>
                            <small className="mx-4">Terms of Service</small>
                            <small className="mx-4">Privacy Policy</small>
                        </div>
                        
                    </div>

                    
                    <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="d-flex justify-content-end"><button className="btn btn-warning test">Test</button></div>
                        <h4 className="text-end mt-5">Unlock your stuck revenue</h4>
                        <p className="text-end">We help you unlock the true potential connect with your customers to understand the rights and wrongs with your product.</p>
                        <img className="mt-4" style={{ width: '300px', marginLeft: 'auto' }} src={login} alt="" />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;