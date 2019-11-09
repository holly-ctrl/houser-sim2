import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Wizard extends Component {
    constructor() {
        super()

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

    render() {
        return (
            <div>
                Wizard
                <div>
                    <input
                     id='nameInput'
                     value={this.state.name}
                     placeholder='Name'
                     onChange={e => this.handleNameChange(e.target.value)}
                    />
                    <input
                     id='addressInput'
                     value={this.state.address}
                     placeholder='Address'
                     onChange={e => this.handleAddressChange(e.target.value)}
                    />
                    <input
                     id='cityInput'
                     value={this.state.city}
                     placeholder='City'
                     onChange={e => this.handleCityChange(e.target.value)}
                    />
                    <input
                     id='stateInput'
                     value={this.state.state}
                     placeholder='State'
                     onChange={e => this.handleStateChange(e.target.value)}
                    />
                    <input
                     id='zipcodeInput'
                     value={this.state.zipcode}
                     placeholder='Zip Code'
                     onChange={e => this.handleZipcodeChange(e.target.value)}
                    />
                </div>
                <Link to='/'>Cancel</Link>
            </div>
        )
    }
}

export default Wizard