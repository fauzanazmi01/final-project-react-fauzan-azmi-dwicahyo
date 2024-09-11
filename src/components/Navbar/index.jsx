import { Component } from "react";
import SearchBar from "./SearchBar";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-body-secondary">
                <div className="container">
                    <a className="navbar-brand">
                        QMovi
                    </a>
                    <SearchBar />
                </div>
            </nav>
        );
    }
}