import React, {Component} from 'react'
import House from './House'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houses: []
        }
        this.addH = this.addH.bind(this)
    }

    componentDidMount() {
        axios
            .get('/api/houses')
            .then(res => {
                this.setState({
                    houses: res.data
                })
            })
    }

    addH(info) {
        this.setState({
            houses: info
        })
    }

    render() {
        return (
            <div> 
                <header>
                    Dashboard
                    <nav>
                        <Link to='/wizard'>Add New Property</Link>
                    </nav>
                </header>
                <hr/>
                <h3>Home Listings</h3>
                <House houses={this.state.houses}/>
                
            </div>
        )
    }
}

export default withRouter(Dashboard)