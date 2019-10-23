import React from 'react';
import AppContext from '../AppContext/AppContext'


export default class Header extends React.Component {
    static contextType = AppContext;
    render() {
        return (
            <nav>
                {this.context.loggedIn ? "Log Out" : "Log In"}
            </nav>
        );
    }
}