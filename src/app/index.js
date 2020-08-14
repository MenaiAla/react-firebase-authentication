import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "../components/navigation/Navigation"
import Routing from "./routing"
import { withAuthentication } from "../session"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            authUser: null
        }
    }
    componentDidMount() {
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({ authUser }) : this.setState({ authUser: null });
        });
    }
    componentWillUnmount() {
        this.listener()
    }
    render() {
        return (
            <Router>
                <div className="bg-red ">
                    <Navigation />
                    <Routing />
                </div>
            </Router>
        )
    }
}
export default withAuthentication(App)