import React, { useState } from 'react';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faLock, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

export default function Form() {
    const { t } = useTranslation(); // Initialize translation
    const [isSignUpActive, setIsSignUpActive] = useState(false);
    const handleSignUpClick = () => setIsSignUpActive(true);
    const handleSignInClick = () => setIsSignUpActive(false);

    return (
        <>
            <body className='form-body-cn'>
                <div className={`container ${isSignUpActive ? 'active' : ''}`}>
                    <div className="sign_up form_container">
                        <form>
                            <h1>{t('createAccount')}</h1>
                            <div className="icons">
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGooglePlusG} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGithub} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faLinkedinIn} /></a>
                            </div>
                            <p>{t('useEmailForRegistration')}</p>
                            <input className="name" type="text" placeholder={t('name')} />
                            <p className="namefield text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> {t('validUsername')}</p>
                            <input className="email" type="email" placeholder={t('email')} />
                            <p className="emailfield text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> {t('validEmail')}</p>
                            <div className="passdiv">
                                <input className="pass" type="password" placeholder={t('password')} />
                                <FontAwesomeIcon icon={faLock} className="show-hide" />
                            </div>
                            <p className="passfield text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> {t('validPasswordDetails')}</p>
                            <button type="button">{t('signUp')}</button>
                        </form>
                    </div>

                    <div className="sign_in form_container">
                        <form>
                            <h1>{t('signIn')}</h1>
                            <div className="icons">
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGooglePlusG} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faFacebook} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faGithub} /></a>
                                <a href="#"><FontAwesomeIcon className='icon-form' icon={faLinkedinIn} /></a>
                            </div>
                            <p>{t('useEmailPassword')}</p>
                            <input className="email1" type="email" placeholder={t('email')} />
                            <p className="emailfield1 text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> {t('validEmail')}</p>
                            <div className="passdiv">
                                <input className="pass1" type="password" placeholder={t('password')} />
                                <FontAwesomeIcon icon={faLock} className="show-hide" />
                            </div>
                            <p className="passfield1 text"><FontAwesomeIcon className='icon-form' icon={faCircleExclamation} /> {t('validPassword')}</p>
                            <p className="forgetpass">{t('forgotPassword')}</p>
                            <button type="button">{t('signIn')}</button>
                        </form>
                    </div>

                    <div className="toggle_container">
                        <div className="toggle">
                            <div className="toggle_panel toggle_left">
                                <h1>{t('welcomeBack')}</h1>
                                <p>{t('enterDetailsForAllFeatures')}</p>
                                <button className="hidden" onClick={handleSignInClick}>{t('signIn')}</button>
                            </div>
                            <div className="toggle_panel toggle_right">
                                <h1>{t('helloFriend')}</h1>
                                <p>{t('registerForAllFeatures')}</p>
                                <button className="hidden" onClick={handleSignUpClick}>{t('signUp')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
}
