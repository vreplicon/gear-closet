import React from 'react';
import './GearHeader.css'
import AppContext from '../AppContext/AppContext'
import GearDetails from '../GearDetails/GearDetails'
import {Link} from 'react-router-dom'


export default class GearHeader extends React.Component {
    static contextType = AppContext

    static defaultProps = {
        gear : {},
        hideDelete : true
    }
    constructor(props) {
        super(props)

        this.state = {
            showDetails : false,
            buttonText: "Show Details"
        }
    }

    toggleDetails() {
        const newText = (this.state.showDetails ? "Show Details" : "Hide Details")
        this.setState({showDetails : !(this.state.showDetails), buttonText : newText})
    }

    static defaultProps = {
        gear : {}
    }

    render() {
        return (
            <div className="gear-header">
            <h3 className="gear-title">{this.props.gear.gear_name}</h3>
            { this.state.showDetails ? <GearDetails gear={this.props.gear}/> : null }
            {this.props.hideDelete ? null :
            <button onClick={() => this.context.deleteGear(this.props.gear.id)}>Delete</button>}
            <Link to={`/update-gear/${this.props.gear.id}`}>
                    <button>Edit</button>
            </Link>
            <button  onClick={() => this.toggleDetails()}>{this.state.buttonText}</button>
            </div>
        );
    }
}