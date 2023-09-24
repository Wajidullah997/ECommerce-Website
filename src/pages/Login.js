import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Meta tite={"Login"} />
            <BreadCrumb tite='Login' />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Login</h3>
                         
                            <form action="" className='d-flex flex-column gap-30'>
                                <div>
                                    <input name='email' type="email"className='form-control' placeholder='Email' />
                                </div>
                                <div className='mt-1'>
                                    <input name='password' type="password"className='form-control' placeholder='Password' />
                                    </div>
                                    <div>
                                    <Link to='/forgot-password' className='forgot'>Forgot password?</Link>
                                    <div className=' d-flex gap-15 align-items-center justify-content-center mt-3'>
                                        <button className='button border-0'>Login</button>
                                        <Link to='/signup' className='button signup border-0'>Sign Up</Link>
                                        </div>
                                        </div>
                            </form>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;