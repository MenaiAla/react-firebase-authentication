import React from "react"
import { Route } from "react-router-dom"
import LandingPage from '../pages/Landing';
import SignUpPage from '../pages/SignUp';
import SignInPage from '../pages/SignIn';
import PasswordForgetPage from '../pages/PasswordForget';
import * as ROUTES from '../constants/routes'

const Routing = () => (
    <div>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
    </div>
)

export default Routing