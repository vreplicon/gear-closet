import React from 'react';
import {GoogleLogin} from 'react-google-login'
import AppContext from '../AppContext/AppContext'

export default class SignUpForm extends React.Component {

    static contextType = AppContext

    responseGoogle = (response) => {
        this.context.signUp(response.profileObj.email)
      }
    render() {
        return (
            <section>
                <header>
                    <h3>Start Tracking Your Gear!</h3>
                </header>
                <GoogleLogin
    clientId="238713141249-8q0vr5q3mgkfn1rt075v69oc66s92l13.apps.googleusercontent.com"
    buttonText="Sign Up With Google"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </section>
        );
    }
}