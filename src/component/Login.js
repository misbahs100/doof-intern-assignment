import React from 'react';
import './Login.css';
import login from '../images/Login.png';
import { Box, Grid } from '@material-ui/core';

const Login = () => {
    return (
        <Box className="background" style={{ padding: "10px" }}>
            <Box p={6}>
                <Box container my="auto" className="login ">
                    <Box px={5}>
                        <Grid container direction="row" className="row-container">
                            <Grid item xs={12} sm={12} md={6} className="" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>

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
                                            <button className=" login-text" type="submit">Login</button>
                                        </form>
                                    </Box>
                                    <br />
                                    <p className="account">Don’t have an account yet? <b>Signup</b></p>

                                </Box>

                                <Box className="terms" style={{ display: 'flex' }}>
                                    <Box mx={2}><small className="">Terms of Service</small></Box>
                                    <Box mx={2}><small className="">Privacy Policy</small></Box>
                                </Box>

                            </Grid>


                            <Grid item xs={12} sm={12} md={6} style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>

                                <Box display="flex" justifyContent="flex-end"><button className="test test-btn">Test</button></Box>
                                <Box mt={5}><h4 className="unlock">Unlock your stuck revenue</h4></Box>
                                <p className="help">We help you unlock the true potential connect with your customers to <br /> understand the rights and wrongs with your product.</p>
                                <Box mt={4} ml="auto"><img className="" style={{ width: '300px' }} src={login} alt="" /></Box>

                            </Grid>
                        </Grid>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default Login;