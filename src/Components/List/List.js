import React from 'react'
import AppContext from '../AppContext/AppContext'
import GearList from '../GearList/GearList'

export default class List extends React.Component {
    static contextType = AppContext

    render() {
        let listId = this.props.match.params.listId  
        const list = this.context.lists.find(list => list.id === listId)
        let gearIds = []
        this.context.gearListsLookup.map((lookup) => {
            if (list.id === lookup.list_id) {
                gearIds.push(lookup.gear_id)
            }

            return gearIds
        })

        return (
            <div className="list">
                <button onClick={() => this.context.goBack()}>Go Back</button>
                <header role="banner" className="banner">
                    <h1>{list.name}</h1>
                </header>
      
                <section className="description">
                    <p>{list.description}</p>
                </section>
                <section className="gear">
                    <h2>Gear</h2>
                        <GearList filterIds={gearIds} />
                </section>
            </div>
        );
    }
}