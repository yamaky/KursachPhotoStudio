import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Service from "./Service";
import s from "./Services.module.css";

class Services extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container_services">
                <Service name={"Носочек"} price={"500"}/><hr/>
                <Service name={"Колготочка"} price={"1500"}/><hr/>
                <Service name={"Пуговка"} price={"150"}/><hr/>
                <Service name={"Колечко"} price={"150"}/><hr/>
                <Service name={"Чулочек"} price={"210"}/><hr/>
            </div>
        )
    }
}

export default Services;