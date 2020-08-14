import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import * as ROUTES from "../../constants/routes"
import { withFirebase } from "../../firebase"
import { compose } from "recompose"
import { SignUpLink } from "../signup/Form"
import { PasswordForgetLink } from '../../components/password-forget'

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props)
        this.state = { ...INITIAL_STATE }
    }

    onSubmit = event => {
        const { email, password } = this.state;
        this.props.firebase.signInWithEmailAndPassword(email, password)
            .then(authUser => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.HOME)
            }).
            catch(error => { this.setState({ error }); });

        event.preventDefault();
    }

    onChange = event => { this.setState({ [event.target.name]: event.target.value }); };

    render() {
        const {
            email,
            password,
            error } = this.state
        const isInvalid = password === '' || email === '';

        return (
            <form className="flex flex-col px-4 w-1/3" onSubmit={this.onSubmit}>
                <div className="py-2 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="You@example.com"
                        className="bg-gray-200 px-4 py-2" />
                </div>
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                    className="bg-gray-200 px-4 py-2" />
                <PasswordForgetLink />
                <button className="bg-indigo-900 mt-8 text-white py-2 font-medium text-base rounded-md"
                    disabled={isInvalid} type="submit">Sign In</button>
                {error && <p style={{ color: "red" }}>{error.message}</p>}
                <SignUpLink />
            </form>)
    }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase)
const SignInLink = () => (<p className="text-sm mt-4 mx-auto"> Have an account? <Link to={ROUTES.SIGN_IN} className="text-indigo-500">Sign In</Link> </p>);
export { SignInLink, SignInForm }