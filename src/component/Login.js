import React from 'react';
import './Login.css';
import login from '../images/Login.png';
import { Box, Button } from '@material-ui/core';

const Login = () => {
    return (
        <div className="background" style={{marginTop: '10%'}}>
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
                <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* <div className="d-flex justify-content-start test"><h1 className="doof">DOOF</h1></div> */}
                <Box display="flex" justifyContent="flex-start" className="test"><h1 className="doof">DOOF</h1></Box>
                        <div className="mt-4">
                            <h4>Login</h4>
                            <form className="mt-5" action="">
                                <label className="input-text" htmlFor="">Email</label><br />
                                <input type="email" name="" placeholder="Email" />
                                <br /><br />
                                <label className="input-text" htmlFor="Password">Password</label><br />
                                <input type="password" name="" placeholder="Password" /> <small className="forgot">Forgot Password</small>
                                <br />
                                <br />
                                <button className="btn btn-warning w-50 login-text" type="submit">Login</button>
                            </form>
                            <p className="account">Don’t have an account yet? <b>Signup</b></p>
                            
                        </div>
                        
                        <div className="terms" style={{marginTop: '30%'}}>
                            <small className="mx-4">Terms of Service</small>
                            <small className="mx-4">Privacy Policy</small>
                        </div>
                        
                    </div>

                    
                    <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        {/* <div className="d-flex justify-content-end"><button className="btn test test-btn d-flex justify-content-center">Test</button></div> */}
                        <Box display="flex" justifyContent="flex-end"><button className="btn test test-btn d-flex justify-content-center">Test</button></Box>
                        <h4 className="text-end unlock mt-5">Unlock your stuck revenue</h4>
                        <p className="text-end help">We help you unlock the true potential connect with your customers to <br /> understand the rights and wrongs with your product.</p>
                        <img className="mt-4" style={{ width: '300px', marginLeft: 'auto' }} src={login} alt="" />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;