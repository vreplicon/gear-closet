import React from 'react';
import './AddList.css'
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

                <label className="check-container" key={i}>
                {gear.gear_name}
                <input 
                    onChange={() => this.toggleItem(gear)}
                    type="checkbox" 
                    className="gear-checkbox"
                    value={gear.gear_name} 
                    // checked={this.state.gear.includes(gear.id) ? true : false}
                    />
                <span class="checkmark"></span>
                </label>
            )
        })

        return (
            <div className="add-list">
                <header className="banner">
                    <h1>Add a List</h1>
                    <button onClick={() => this.context.goBack()}>Go Back</button>
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
                                className="list-title" 
                                type="text" 
                                name="list-title" 
                                placeholder="Freerider Climb" 
                                onChange={(e) => this.setState({title: e.target.value})}
                                required />
                        </div>
                        
                        <div className="form-section">
                            <label htmlFor="trip-description">Trip summary</label>
                            <textarea className="trip-description" name="trip-description" rows="10"  onChange={(e) => this.setState({description: e.target.value})}></textarea>
                        </div>
                        
                        <div className="form-section">
                            <p>Select gear to add</p>
                            <ul className="gear-list">
                                {gearOpts}
                            </ul>
                        </div>

                        <button type="submit">Submit</button>
                        <button onClick={() => this.context.goBack()}>Cancel</button>
                        
                    </form>
                </section>
            </div>
        );
    }
}