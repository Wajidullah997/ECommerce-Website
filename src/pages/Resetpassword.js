import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
const Resetpassword = () => {
    return (
        <>
            <Meta tite={"Reset Password"} />
            <BreadCrumb tite='Reset Password' />
            <div className="login-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3 className='text-center mb-3'>Reset Your Password</h3>
                                <form action="" className='d-flex flex-column gap-30'>
                                    <p className="text-center">
                                        we will send you an email to reset your password
                                    </p>
                                    <div>
                                        <input name='password' type="password" className='form-control' placeholder='Password' />
                                    </div>
                                    <div>
                                        <input name='confpassword' type="password" className='form-control' placeholder='Confirm Password' />
                                    </div>
                                    <div className='mt-1'>
                                        <input name='email' type="email" className='form-control' placeholder='Email' />
                                    </div>
                                    
                                    <div>
                                        <p>No account found with that email</p>
                                  </div>
                                     
                                    <div className=' d-flex gap-15 flex-column align-items-center justify-content-center mt-3'>
                                            <button type='submit' className='button border-0'>Ok</button>
                                        
                                            <Link to='/login'>Cancel</Link>
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
export default Resetpassword;