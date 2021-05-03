import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }
    }

    render() {
        return (
            <div>
                <button className="button_category">{this.state.name}</button>
            </div>
        )
    }
}

export default Category;