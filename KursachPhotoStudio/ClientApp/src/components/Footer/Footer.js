import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import logo from './logo.png';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-md-3 footer-about wow fadeInUp">
                        <img class="logo-footer" src={logo} height="30" alt={"logo"} alt="logo-footer" data-at2x="./logo.png"/>
                        <p>
                            There are no rules for good photos, there are only good photos.
                        </p>
                    </div>
                    <div class="col-md-4 offset-md-1 footer-contact wow fadeInDown">
                        <h3>Contact</h3>
                        <p><i class="fas fa-phone"></i> Phone: +7 (901) 284-41-24</p>
                        <p><i class="fas fa-envelope"></i> Email: <a
                            href="mailto:yamaky.shikou@gmail.com">yamaky.shikou@gmail.com</a></p>
                    </div>
                    <div class="col-md-4 footer-links wow fadeInUp">
                        <div class="row">
                            <div class="col">
                                <h3>Links</h3>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <p><a class="scroll-link" href="#top-content">Home</a></p>
                                <p><a href="#">About</a></p>
                                <p><a href="#">Gallery</a></p>
                            </div>
                            <div class="col-md-6">
                                <p><a href="#">Categories</a></p>
                                <p><a href="#">Services</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
    }
}

export default Footer;