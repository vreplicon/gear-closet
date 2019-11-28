import React from "react";
import SignUpForm from "../SignUpForm/SignUpForm";
import SignInForm from "../SignInForm/SignInForm";
import { Link } from "react-router-dom";
import AppContext from "../AppContext/AppContext";
import gearImage from "../../gearImage.PNG"
import listImage from "../../listPage.PNG"
import './LandingPage.css'

export default class LandingPage extends React.Component {
  static contextType = AppContext;

  render() {
    return (
      <div className="landing-page">
        <header role="banner" className="banner">
          <h1>Gear Closet</h1>
          <h2 className="tagline">
            Whether it's your pack or your rack, we'll help you keep track
          </h2>
        </header>

        <section className="text-block">
          <header className="block-header">
            <h3>Create a Database with all of Your Gear</h3>
            <p>
            Gear Closet lets you keep all of your equipment info for various
            sports in one place!
          </p>
          </header>

            <img src={gearImage} alt="List of gear on user's homepage" width="450" height="275"/>

        </section>

        <section className="text-block">
          <header className="block-header">
            <h3>Compile Lists for Your Upcoming Trips</h3>
            <p>Put together the list of gear to prepare for your next trip</p>
          </header>
            <img src={listImage} alt="List's page" width="450" height="275"/>
        </section>

        <Link to="/#/home">
          <button onClick={() => this.context.showExamplePage()}>
            Head to example homepage
          </button>
        </Link>
        <div className="google-buttons">
            <SignUpForm />
            <SignInForm />
        </div>
      </div>
    );
  }
}
