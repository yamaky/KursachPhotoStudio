import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from "react-router-dom";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name
        }
    }

    render() {
        return (
            <div className="button_category">
                <NavLink className="link_category" to={"/category/" + this.state.id}>{this.state.name}</NavLink>
            </div>
        )
    }
}

export default Category;