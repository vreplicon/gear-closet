import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext/AppContext";
import GearHeader from "../GearHeader/GearHeader";

export default class GearList extends React.Component {
  static contextType = AppContext;

  render() {
    let gearList = this.context.gear.map((gear, i) => (
      <GearHeader gear={gear} key={i} />
    ));

    return (
      <section className="gear">
        <section className="main-header">
          <h2 className="text-header">Gear</h2>
          <Link to="#/add-gear">
            <button>Add new gear</button>
          </Link>
        </section>
        {gearList}
      </section>
    );
  }
}
