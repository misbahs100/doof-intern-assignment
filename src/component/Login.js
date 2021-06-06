import React from 'react';
import './Login.css';
import login from '../images/Login.png';
import { Box} from '@material-ui/core';
// import { spacing } from '@material-ui/system';

const Login = () => {
    return (
        <div className="background" style={{ marginTop: '10%' }}>
            <Box my="auto" className="login container" style={{ border: '1px solid red' }}>
                <div className="row container" >
                    <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>

                        <Box display="flex" justifyContent="flex-start" className="test"><h1 className="doof">DOOF</h1></Box>
                        <Box mt={1}>
                            <h4>Login</h4>
                           <Box mt={4}>
                           <form className="" action="">
                                <label className="input-text" htmlFor="">Email</label><br />
                                <input type="email" name="" placeholder="Email" />
                                <br /><br />
                                <label className="input-text" htmlFor="Password">Password</label><br />
                                <input type="password" name="" placeholder="Password" /> <small className="forgot">Forgot Password</small>
                                <br />
                                <br />
                                <button className="btn btn-warning w-50 login-text" type="submit">Login</button>
                            </form>
                           </Box>
                           <br />
                            <p className="account">Don’t have an account yet? <b>Signup</b></p>

                        </Box>

                        <div className="terms" style={{ marginTop: '30%', display: 'flex' }}>
                            <Box ><small className="">Terms of Service</small></Box>
                            <Box mx={4}><small className="">Privacy Policy</small></Box>
                        </div>

                    </div>
 

                    <div className="col-md-6" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>

                        <Box display="flex" justifyContent="flex-end"><button className="btn test test-btn d-flex justify-content-center">Test</button></Box>
                        <Box mt={5}><h4 className="unlock">Unlock your stuck revenue</h4></Box>
                        <p className="help">We help you unlock the true potential connect with your customers to <br /> understand the rights and wrongs with your product.</p>
                        <Box mt={4} ml="auto"><img className="" style={{ width: '300px' }} src={login} alt="" /></Box>

                    </div>
                </div>

            </Box>
        </div>
    );
};

export default Login;