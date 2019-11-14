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
                {this.props.gear.notes ? <dt>Notes:</dt> : null}
                {this.props.gear.notes ? <dd>{this.props.gear.notes}</dd> : null}
                {this.props.gear.gear_weight > 0 ? <dt>Weight:</dt> : null}
                {this.props.gear.gear_weight > 0 ? 
                <dd>{`${this.props.gear.gear_weight} ${this.props.gear.weight_unit}`}</dd>
                : null }
              </dl>
            </div>
        )
    }

}

