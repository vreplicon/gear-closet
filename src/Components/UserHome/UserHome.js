import React from 'react';
import UserGear from '../UserGear/UserGear';
import UserLists from '../UserLists/UserLists';
import {Link} from 'react-router-dom';

export default class UserHome extends React.Component {


    render() {
        return (
            <div className="user-home">
            <header role="banner" className="banner">
            <Link to='/'>
                    <button>Go Back to Landing Page</button>
                </Link>
        <h1>Your Gear Closet</h1>
      </header>
      
            <UserLists />
            <UserGear />
    </div>
        );
    }
}