import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm';
import SignInForm from '../SignInForm/SignInForm'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext/AppContext'

export default class LandingPage extends React.Component {
    static contextType = AppContext

    render() {
        return (
            <div className="landing-page">
                <header role="banner" className="banner">
                    <h1>Gear Closet</h1>
                    <h2 className="tagline">Whether it's your pack or your rack, we'll help you keep track</h2>
                </header>
                
                <section className="one">
                    <header>
                        <h3>Create a Database with all of Your Gear</h3>
                    </header>
                    
                    <p>[<em>placeholder for screenshot of user gear entry interface</em>]</p>
                    <p>Gear Closet lets you keep all of your equipment info for various sports in one place!</p>
                </section>
      
                <section className="two">
                    <header>
                        <h3>Compile Lists for Your Upcoming Trips</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of list editing interface</em>]</p>
                    <p>Put together the list of gear to prepare for your next trip</p>
                </section>
     
                <section className="three">
                    <header>
                        <h3>Customizable Stats For Lists</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of list stats</em>]</p>
                    <p>Want a weight break down of your list? Or would you rather know the distribution of types of gear? It is up to you!</p>
                </section>

                <Link to='/home'>
                    <button onClick={() => this.context.showExamplePage()}>Head to example homepage</button>
                </Link>
                <SignUpForm />
                <SignInForm/>
            </div>
        );
    }
}