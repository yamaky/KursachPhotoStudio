import React, {Component} from "react";
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            price:props.price
        }
    }

    render() {
        return (
            <div className="area_service">
                <p>{this.state.name}</p>
                <p>{this.state.price}</p>
                <button className={classNames("button_service", "button_add")}>Add</button>
                <button className={classNames("button_service", "button_edit")}>Edit</button>
                <button className={classNames("button_service", "button_delete")}>Delete</button>
            </div>
        )
    }
}

export default Service;