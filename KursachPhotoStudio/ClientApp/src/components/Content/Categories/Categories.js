import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Category from "./Category";
import c from './Categories.module.css';

class Categories extends Component {
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
                        return <Category key={cat.id} name={cat.name}/>
                    })
                }
            </div>
        )
    }
}

export default Categories;