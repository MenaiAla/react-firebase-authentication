import React from "react"
import * as ROUTES from "../../constants/routes"
import { Link } from "react-router-dom"
import { withFirebase } from "../../firebase";

const INITIAL_STATE = { email: '', error: null, };

class PasswordForgetFormBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }
    onSubmit = event => {
        const { email } = this.state;
        this.props.firebase.resetPassword(email).then(() => {
            this.setState({ ...INITIAL_STATE });
        }).catch(error => {
            this.setState({ error });
        });
        event.preventDefault();
    };
    onChange = event => { this.setState({ [event.target.name]: event.target.value }); };
    render() {
        const { email, error } = this.state;
        const isInvalid = email === '';
        return (
            <form className="flex flex-col px-4 w-1/3"
                onSubmit={this.onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="You@example.com"
                    className="bg-gray-200 px-4 py-2" />
                <button className="bg-indigo-900 mt-2 text-white py-2 font-medium text-base rounded-md"
                    disabled={isInvalid} type="submit"> Reset My Password </button>
                {error && <p style={{ color: "red" }}>{error.message}</p>}
            </form>);
    }
}
const PasswordForgetForm = withFirebase(PasswordForgetFormBase)
const PasswordForgetLink = () => (<p className="text-xs font-bold mt-1 text-indigo-500"> <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link></p>);
export default PasswordForgetForm;
export { PasswordForgetLink }