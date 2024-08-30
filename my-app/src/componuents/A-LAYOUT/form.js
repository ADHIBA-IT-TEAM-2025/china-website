import React, { useState } from 'react';
import './nav.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLock, faUnlock, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';


export default function Form() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const handleSignUpClick = () => setIsSignUpActive(true);
    const handleSignInClick = () => setIsSignUpActive(false);

    return (
        <>


            <body className='form-body-cn'>
                <div className={`container ${isSignUpActive ? 'active' : ''}`}>
                    <div className="sign_up form_container">
                        <form>
                            <h1>Create Account</h1>
                            <div className="icons">
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGooglePlusG} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGithub} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faLinkedinIn} /></a>
                            </div>
                            <p>or use your email for registration</p>
                            <input className="name" type="text" placeholder="Name" />
                            <p className="namefield text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> Please enter a valid username</p>
                            <input className="email" type="email" placeholder="Email" />
                            <p className="emailfield text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> Please enter a valid email-address</p>
                            <div className="passdiv">
                                <input className="pass" type="password" placeholder="Password" />
                                <FontAwesomeIcon  icon={faLock} className="show-hide" />
                            </div>
                            <p className="passfield text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> Please enter at least 6-12 characters, including numbers, symbols, lowercase, and uppercase letters.</p>
                            <button type="button">SIGN UP</button>
                        </form>
                    </div>

                    <div className="sign_in form_container">
                        <form>
                            <h1>Sign In</h1>
                            <div className="icons">
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGooglePlusG} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGithub} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faLinkedinIn} /></a>
                            </div>
                            <p>or use your email password</p>
                            <input className="email1" type="email" placeholder="Email" />
                            <p className="emailfield1 text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> Please enter a valid email-address</p>
                            <div className="passdiv">
                                <input className="pass1" type="password" placeholder="Password" />
                                <FontAwesomeIcon  icon={faLock} className="show-hide" />
                            </div>
                            <p className="passfield1 text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> Please enter a valid password</p>
                            <p className="forgetpass">Forget Your Password?</p>
                            <button type="button">SIGN IN</button>
                        </form>
                    </div>

                    <div className="toggle_container">
                        <div className="toggle">
                            <div className="toggle_panel toggle_left">
                                <h1>Welcome Back!</h1>
                                <p>Enter your personal details to use all site features</p>
                                <button className="hidden" onClick={handleSignInClick}>SIGN IN</button>
                            </div>
                            <div className="toggle_panel toggle_right">
                                <h1>Hello, Friend!</h1>
                                <p>Register with your personal details to use all of the site features</p>
                                <button className="hidden" onClick={handleSignUpClick}>SIGN UP</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>

    );
}


