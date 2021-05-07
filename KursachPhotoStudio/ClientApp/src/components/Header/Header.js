import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";
import logo from './logo.png';
import h from './Header.module.css';


class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark font-weight-light">
                <NavLink className="navbar-brand" to={"/"}>
                    <img src={logo} height="30" alt={"logo"}/>
                </NavLink>
                <div className="collapse navbar-collapse justify-content-center " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-right">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                    </ul>
                </div>

                <a className="btn btn-outline" href="#" data-toggle="modal" data-target="#exampleModal">Sign in</a>
            </nav>
        )
    }
}

export default Header;