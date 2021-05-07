import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Service from "./Service";
import s from "./Services.module.css";
import Category from "../Categories/Category";
import classNames from "classnames";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            servicelist: []
        };
        this.getService = this.getService.bind(this);
        this.deleteService = this.deleteService.bind(this)
        this.getService();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.confirm('По кнопке кликнули');
    }

    async getService(){
        var request = await fetch("/api/services/", {
            method: "GET",
            mode: "cors",
            credentials: "include"
        });
        if (request.ok){
            var responce = await request.json();
            this.setState({"servicelist":responce})
        }
    }

    async deleteService(serv){
        if(serv){
            var request = await fetch("/api/services/" + serv, {
                method: "DELETE",
                headers:{'Content-Type': 'application/json;charset=utf-8'},
            });
        }
        await this.getService();
    }

    render() {
        var a = this.props.match.params.id;
        return (
            <div className="container_services">
                {
                    this.state.servicelist.map((serv)=>{if(a == serv.categoryId){
                    return <Service key={serv.id} id={serv.id} name={serv.name} price={serv.price} categpryId={serv.categoryId}
                    delete={this.deleteService}/>
                }})

                }
                <div className="div_add">
                    <input type="text" className="add_service" id="name" placeholder="Name" aria-label="Name"/>
                    <input type="text" className="add_service" id="price" placeholder="Price" aria-label="Price"/>
                    <button onClick={this.handleClick} className={classNames("button_service", "button_add")}>Add</button>
                </div>
            </div>
        )
    }
}

export default Services;