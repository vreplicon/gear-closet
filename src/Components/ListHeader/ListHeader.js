import React from "react";
import "./ListHeader.css";
import { Link } from "react-router-dom";
import AppContext from "../AppContext/AppContext";

export default class ListHeader extends React.Component {
  static contextType = AppContext;
  static defaultProps = {
    list: {}
  };

  render() {
    const list = this.props.list;
    return (
      <div className="list-header">
        <h3 className="list-name">{list.list_name}</h3>
        <Link to={`#/list/${list.id}`} className="list-name">
          <button>View</button>
        </Link>
        <button onClick={() => this.context.deleteList(list.id)}>Delete</button>
        <Link to={`/#/update-list/${list.id}`}>
          <button>Edit</button>
        </Link>
      </div>
    );
  }
}
