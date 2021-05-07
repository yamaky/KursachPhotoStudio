import React, {Component} from "react";
import classNames from 'classnames';
import 'bootstrap/dist/css/bootstrap.css';
import Services from "./Services";

class Service extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
            price:props.price,
            categoryId: props.categoryId
        }
        this.deleteMethod = this.deleteMethod.bind(this);
    }

    deleteMethod() {
        this.props.delete(this.state.id);
    }

    editService() {
        window.confirm('По кнопке кликнули');
    }

    render() {
        return (
            <div className="area_service">
                <p>{this.state.name}</p>
                <p>{this.state.price}</p>
                <button onClick={this.editService} className={classNames("button_service", "button_edit")}>Edit</button>
                <button onClick={this.deleteMethod} className={classNames("button_service", "button_delete")}>Delete</button>
            </div>
        )
    }
}

export default Service;