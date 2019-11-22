import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './Wizard.css'
import axios from 'axios'

class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        }
    }

    handleNameChange(value) {
        this.setState({
            name: value
        })
    }

    handleAddressChange(value) {
        this.setState({
            address: value
        })
    }

    handleCityChange(value) {
        this.setState({
            city: value
        })
    }

    handleStateChange(value) {
        this.setState({
            state: value
        })
    }

    handleZipcodeChange(value) {
        this.setState({
            zipcode: value
        })
    }

    addHou() {
        axios
            .post('/api/houses', {name: this.state.name, address: this.state.address, city: this.state.city, state: this.state.state, zipcode: this.state.zipcode})
            .then(res => {
                this.props.addH(res.data)
            })
        }

    render() {
        return (
            <div>
                <header>
                    <h2>Add New Listing</h2>
                    <h3 class='cancelBtn'><Link to='/'>Cancel</Link></h3> 
                </header>
                <div>
                    <h3 class='nameIn'> Property Name 
                        <input
                        id='nameInput'
                        value={this.state.name}
                        onChange={e => this.handleNameChange(e.target.value)}
                        />
                    </h3>
                    <h3 class='addIn'> Address
                        <input
                        id='addressInput'
                        value={this.state.address}
                        onChange={e => this.handleAddressChange(e.target.value)}
                        />
                    </h3>
                    <h3 class='cityIn'> City
                        <input
                        id='cityInput'
                        value={this.state.city}
                        onChange={e => this.handleCityChange(e.target.value)}
                        />
                    </h3>
                    <h3 class='stateIn'> State
                        <input
                        id='stateInput'
                        value={this.state.state}
                        onChange={e => this.handleStateChange(e.target.value)}
                        />
                    </h3>
                    <h3 class='zipIn'> Zip
                        <input
                        id='zipcodeInput'
                        value={this.state.zipcode}
                        onChange={e => this.handleZipcodeChange(e.target.value)}
                        />
                    </h3>
                </div>
                <button onClick={e => this.addHou()}>Complete</button>
            </div>
        )
    }
}

export default Wizard