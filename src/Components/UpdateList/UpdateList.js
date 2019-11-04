import React from 'react';
import AppContext from '../AppContext/AppContext'

export default class UpdateList extends React.Component {

    static contextType = AppContext
    
    constructor(props) {
        super(props);

        this.state = {
            listId : null,
            title : "",
            description : "",
            gear : []
          }
    }

    toggleItem(gear) {
        let idx = -1
        let newGear
        this.state.gear.map((g, i) => {
            if (g === gear.id) {
                idx = i
            }
            return idx
        })

        if (idx > -1) {
            this.state.gear.splice(idx, 1)
            newGear = this.state.gear
        } else {
            newGear = [...this.state.gear, gear.id]
        }

        this.setState({gear: newGear})
    }


    componentDidMount() {
        let listId = parseInt(this.props.match.params.listId)
        const list =  this.context.lists.find(list => list.id === listId)
        this.setState({
            listId : listId,
            title : list.list_name,
            description : list.list_description,
            gear : list.gear
        })
    }

    render() {
        
        const currentGear = this.state.gear
        const gearOpts = this.context.gear.map((gear, i) => {
            return (
                <label key={i}>
                <input 
                    onChange={() => this.toggleItem(gear)}
                    type="checkbox" 
                    className="gear-checkbox"
                    value={gear.gear_name} 
                    checked={currentGear.includes(gear.id) ? true : false}
                    />
                {gear.gear_name}
                </label>
            )
        })

        return (
            <div className="add-list">
                <header className="banner">
                    <h1>Update List</h1>
                    <button onClick={() => this.context.goBack()}>Cancel</button>
                </header>
                
                <section>
                    <form id="update-list" onSubmit={e => this.context.updateList(e, {
                        id : this.state.listId,
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
                                value={this.state.title} 
                                placeholder="Freerider Climb" 
                                onChange={(e) => this.setState({title: e.target.value})}
                                required />
                        </div>
                        
                        <div className="form-section">
                            <label htmlFor="trip-description">Trip summary</label>
                            <textarea name="trip-description" 
                                        rows="10"
                                        value={this.state.description}  
                                        onChange={(e) => this.setState({description: e.target.value})}></textarea>
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