import React from 'react'
import AppContext from '../AppContext/AppContext'

export default class GearDetails extends React.Component {

    static contextType = AppContext



    render() {
        return (
            <div>
                <dl>
                <dt>Type:</dt>
                <dd>{this.props.gear.type}</dd>
                <dt>Notes:</dt>
                <dd>{this.props.gear.notes}</dd>
                <dt>Weight:</dt>
                <dd>{`${this.props.gear.weight} ${this.props.gear.unit}`}</dd>
              </dl>
            </div>
        )
    }

}

