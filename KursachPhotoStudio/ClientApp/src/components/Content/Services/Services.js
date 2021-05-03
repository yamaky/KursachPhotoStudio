import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Service from "./Service";
import s from "./Services.module.css";
import Category from "../Categories/Category";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categorylist: []
        };
        this.getCategory = this.getCategory.bind(this);
        this.getCategory();
    }

    async getCategory(){
        var request = await fetch("/api/services/", {
            method: "GET",
            mode: "cors",
            credentials: "include"
        });
        if (request.ok){
            var responce = await request.json();
            this.setState({"categorylist":responce})
        }
    }

    render() {
        return (
            <div className="container">
                {
                    this.state.categorylist.map(function (cat){
                        return <Service key={cat.id} name={cat.service.name} price={cat.service.price}/>
                    })
                }
            </div>
        )
    }
}

export default Services;