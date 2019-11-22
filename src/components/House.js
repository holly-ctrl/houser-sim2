import React, {Component} from 'react'
import './House.css'

class House extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div> 
                <div>
                   {this.props.houses.map((el) => (
                       <ul class='homeListings'>
                            <li>Property Name: {el.name}</li>
                            <li>Address: {el.address}</li>
                            <li>City: {el.city}</li>
                            <li>State: {el.state}</li>
                            <li>Zip: {el.zipcode}</li>
                       </ul>
                    ))} 
                </div>
            </div>
        )
    }
}

export default House