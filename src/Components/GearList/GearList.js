import React from 'react';
import AppContext from '../AppContext/AppContext'
import GearHeader from '../GearHeader/GearHeader';


export default class GearList extends React.Component {
    static contextType = AppContext;

    static defaultProps = {
        filterIds : null
    }

    render() {

        let gearList = this.context.gear.map((gear, i) => 
            { 
                if (this.props.filterIds == null || this.props.filterIds.includes(gear.id)) {
                    
               return (<li key={i}><GearHeader gear={gear} hideDelete={true}/></li>);
                } else {
                    
                    return null;
                }
            }
    
        );

        return (
            <section className="gear">
            <section className="gearHeader two">
            </section>
                {gearList}
            </section>
         );
    }
}


