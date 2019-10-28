import React from 'react';
import {Link} from 'react-router-dom'
import AppContext from '../AppContext/AppContext'

export default class ListHeader extends React.Component {
    static contextType = AppContext
    static defaultProps = {
        list : {}
    }

    render() {
        const list = this.props.list
        return (
            <div className="list-header">
                <Link to={`/list/${list.id}`} className="list-name">
                    <h3>{list.list_name}</h3>
                </Link>
                <button onClick={() => this.context.deleteList(list.id)}>Delete</button>
            </div>
        );
    }
}