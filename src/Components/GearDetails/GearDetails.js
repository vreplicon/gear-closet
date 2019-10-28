import React from 'react'
import AppContext from '../AppContext/AppContext'

export default class GearDetails extends React.Component {

    static contextType = AppContext



    render() {
        return (
            <div>
                <dl>
                <dt>Type:</dt>
                <dd>{this.props.gear.gear_type}</dd>
                <dt>Notes:</dt>
                <dd>{this.props.gear.notes}</dd>
                <dt>Weight:</dt>
                <dd>{`${this.props.gear.gear_weight} ${this.props.gear.weight_unit}`}</dd>
              </dl>
            </div>
        )
    }

}

