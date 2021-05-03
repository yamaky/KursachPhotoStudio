import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Category from "./Category";
import c from './Categories.module.css';

class Categories extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <Category name={"Arenda"}/>
                <Category name={"Shkola"}/>
                <Category name={"PhotoStudii"}/>
            </div>
        )
    }
}

export default Categories;