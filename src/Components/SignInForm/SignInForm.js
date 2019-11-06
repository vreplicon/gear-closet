import React from 'react';
import AppContext from '../AppContext/AppContext'
import {GoogleLogin} from 'react-google-login'


export default class SignInFrom extends React.Component {
    static contextType = AppContext

    responseGoogle = (response) => {
        this.context.login(response.profileObj.email)
      }

    render() {

        return (
            <section>
                <header>
                    <h3>Already have an accout? Login here!</h3>
                </header>
                <GoogleLogin
    clientId="238713141249-8q0vr5q3mgkfn1rt075v69oc66s92l13.apps.googleusercontent.com"
    buttonText="Login With Google"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
            </section>
        );
    }
}

