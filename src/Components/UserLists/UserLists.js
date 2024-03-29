import React from "react";
import AppContext from "../AppContext/AppContext";
import ListHeader from "../ListHeader/ListHeader";
import { Link } from "react-router-dom";
import "./UserLists.css";

export default class UserLists extends React.Component {
  static contextType = AppContext;

  render() {
    const allLists = this.context.lists.map((list, i) => (
      <ListHeader list={list} key={i} />
    ));

    return (
      <section className="list">
        <section className="main-header">
          <h2 className="text-header">Lists</h2>
          <Link to="/add-list">
            <button>Add new list</button>
          </Link>
        </section>
        {allLists}
      </section>
    );
  }
}
