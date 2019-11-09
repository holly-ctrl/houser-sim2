import React, {Component} from 'react'
import House from './House'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
    }

    render() {
        return (
            <div>
                Dashboard
                <nav>
                    <Link to='/wizard'>Add New Property</Link>
                </nav>
                <House />
            </div>
        )
    }
}

export default withRouter(Dashboard)