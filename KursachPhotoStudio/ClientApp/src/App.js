import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Services from "./components/Content/Services/Services";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}
