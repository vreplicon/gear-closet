import React from "react";
import AppContext from "../AppContext/AppContext";
import GearList from "../GearList/GearList";
import './List.css'

export default class List extends React.Component {
  static contextType = AppContext;

  render() {
    let listId = parseInt(this.props.match.params.listId);
    const list = this.context.lists.find(list => list.id === listId);

    return (
      <div className="list">
        <button onClick={() => this.context.goBack()}>Go Back</button>
        <header role="banner" className="banner">
          <h1>{list.list_name}</h1>
        </header>
        <section className="main-header">
          <h2 className="text-header">Description</h2>
        </section>
        <section className="description">
          <p>{list.list_description}</p>
        </section>
        <section className="main-header">
          <h2 className="text-header">Gear</h2>
        </section>
        <GearList filterIds={list.gear} />



      </div>
    );
  }
}
