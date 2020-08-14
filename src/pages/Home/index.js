import React from "react"
import { withAuthorization } from "../../session"
const HomePage = () => (
    <div>
        <h1>Home Page</h1>
        <p>The Home Page is accessible by every signed in user.</p>
    </div>);

const isAuthorized = auth => !!auth
export default withAuthorization(isAuthorized)(HomePage)