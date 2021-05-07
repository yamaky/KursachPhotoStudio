import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import s from './Content.module.css'
import Categories from "./Categories/Categories";
import Services from "./Services/Services";
import {Route} from "react-router-dom";

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="container text-light">
                    <h1>PhotoStudio</h1>
                    <p>There are no rules for good photos, there are only good photos.</p>
                </div>
                <div className="colums">
                    <Categories/>
                    <Route path='/category/:id/' component={Services}/>
                </div>
            </div>
        )
    }
}

export default Content;