import { Component } from "react";

export default class Navbar extends Component {
    render() {
        const { child } = this.props;
        return (
            <nav className="navbar bg-body-secondary">
                <div className="container">
                    <a className="navbar-brand">
                        QMovi
                    </a>
                    {child}
                </div>
            </nav>
        );
    }
}