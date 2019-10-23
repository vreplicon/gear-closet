import React from 'react';
import UserGear from '../UserGear/UserGear';
import UserLists from '../UserLists/UserLists';

export default class UserHome extends React.Component {


    render() {
        return (
            <div className="user-home">
<header role="banner" className="banner">
        <h1>Your Gear Closet</h1>
      </header>
      
      <UserLists />
            <UserGear />
    </div>
        );
    }
}