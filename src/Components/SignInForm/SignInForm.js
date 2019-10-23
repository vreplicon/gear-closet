import React from 'react';


export default class SignInFrom extends React.Component {
    render() {
        return (
            <div className="sign-in-form">
                <header class="banner">
                    <h1>Sign In</h1>
                </header>
                
                <section>
                    <form id="sign-in-form">
                        <div class="form-section">
                            <label for="email">Email</label>
                            <input type="text" name="email" required />
                        </div>
                        <div class="form-section">
                            <label for="password">Password</label>
                            <input type="text" name="password" required />
                        </div>
            
                        <button type="submit">Submit</button>
                    </form>
                </section>
            </div>
        );
    }
}

