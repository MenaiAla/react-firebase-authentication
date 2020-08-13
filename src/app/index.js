import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navigation from "../components/navigation/Navigation"
import Routing from "./routing"


const App = () => (
    <Router>
        <Navigation />
        <Routing />
    </Router>)
export default App