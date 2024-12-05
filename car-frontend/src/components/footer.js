import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { connect } from 'react-redux';

function Footer({commonData}) {
    return (
        <footer className="footer p-2" style={{ color:commonData.colorMode}}>
            <div className="container p-4">
                <div className="row">
                    <section className="col-12 col-md-3 text-center mb-4 mb-md-0">
                        <h4>Get to Know Us</h4>
                        <hr/>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press Release</li>
                        </ul>
                    </section>
                    <section className="col-12 col-md-6 text-center mb-4 mb-md-0">
                        <h4>Connect with Us</h4>
                        <hr/>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} /> YouTube
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} /> Instagram
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="col-12 col-md-3 text-center">
                        <h4>Let Us Help You</h4>
                        <hr/>
                        <ul className="list-unstyled">
                            <li>Your Account</li>
                            <li>Help</li>
                        </ul>
                    </section>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12 text-center">
                        © All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}


let connectToStore = (state)=>({commonData:state})
export default connect(connectToStore)(Footer)