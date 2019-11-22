import React from "react";
import AppContext from "../AppContext/AppContext";
import GearList from "../GearList/GearList";

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

        <section className="description">
          <p>{list.list_description}</p>
        </section>
        <section className="gear">
          <h2>Gear</h2>
          <GearList filterIds={list.gear} />
        </section>
      </div>
    );
  }
}
