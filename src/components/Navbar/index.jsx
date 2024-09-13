import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        const { child } = this.props;
        return (
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <Link to='/' className="navbar-brand">
                        QMovi
                    </Link>
                    {child}
                </div>
            </nav>
        );
    }
}