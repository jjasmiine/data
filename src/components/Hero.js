import React from "react";
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'
import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">

                <div className="content">

                    <div className="col-one">
                        <h1>Data to enrich your</h1>
                        <h1><span className="primary-color">online business</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet luctus venenatis lectus magna. Sed vulputate mi sit amet mauris commodo.</p>


                        <div className="used-by">
                            <p>USED BY</p>
                            <div className="icons">
                                <span className="icon-name"><span className="icon"><FaDatabase /></span> Staxx</span>
                                <span className="icon-name"><span className="icon"><FaAsterisk /> </span>Star AI</span>
                                <span className="icon-name"><span className="icon"><FaAccusoft /> </span>Accusoft</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-two">
                        <div className="form-layout">
                            <div className="form-container">
                                <p className="sign-in-text">Sign in with</p>
                                <div className="social-login">
                                    <span><FaFacebook size={20} /></span>
                                    <span><FaTwitter size={20} /></span>
                                    <span><FaGithub size={20} /></span>
                                </div>

                                <div className="divider">
                                    <p><span>Or</span></p>
                                </div>

                                <form action="">
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Password" />
                                    <button>Create your Account</button>
                                </form>
                            </div>

                            <div className="form-footer">
                                <p>
                                    By signing up you agree to our
                                    <span className="primary-color"> Terms, Data, Policy </span>
                                    and
                                    <span className="primary-color"> Cookies Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div >
        </div >
    )
}

export default Hero