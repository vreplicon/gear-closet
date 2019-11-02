import React from 'react';
import AppContext from '../AppContext/AppContext'

export default class AddList extends React.Component {

    static contextType = AppContext
    
    constructor(props) {
        super(props);

        this.state = {
            title : "",
            description : "",
            gear : []
          }
    }

    toggleItem(gear) {
        let idx = -1
        let newGear
        this.state.gear.map((g, i) => {
            if (g.id === gear.id) {
                idx = i
            }
            return idx
        })

        if (idx > -1) {
            this.state.gear.splice(idx, 1)
            newGear = this.state.gear
        } else {
            newGear = [...this.state.gear, gear]
        }

        this.setState({gear: newGear})
    }


    render() {



        const gearOpts = this.context.gear.map((gear, i) => {
            return (
                <label key={i}>
                <input 
                    onChange={() => this.toggleItem(gear)}
                    type="checkbox" 
                    className="gear-checkbox"
                    value={gear.gear_name} 
                  
                    />
                {gear.gear_name}
                </label>
            )
        })

        return (
            <div className="add-list">
                <header className="banner">
                    <h1>Add a List</h1>
                    <button onClick={() => this.context.goBack()}>Cancel</button>
                </header>
                
                <section>
                    <form id="add-list" onSubmit={e => this.context.addList(e, {
            list_name : this.state.title,
            list_description : this.state.description,
            user_id: this.context.userId,
            gear : this.state.gear
        })}>
                        <div className="form-section">
                            <label htmlFor="list-title">List title</label>
                            <input 
                                type="text" 
                                name="list-title" 
                                placeholder="Freerider Climb" 
                                onChange={(e) => this.setState({title: e.target.value})}
                                required />
                        </div>
                        
                        <div className="form-section">
                            <label htmlFor="trip-description">Trip summary</label>
                            <textarea name="trip-description" rows="10"  onChange={(e) => this.setState({description: e.target.value})}></textarea>
                        </div>
                        
                        <div className="form-section">
                            <p>Select gear to add</p>
                            <ul className="gear-list">
                                {gearOpts}
                            </ul>
                        </div>

                        <button type="submit">Submit</button>
                        
                    </form>
                </section>
            </div>
        );
    }
}