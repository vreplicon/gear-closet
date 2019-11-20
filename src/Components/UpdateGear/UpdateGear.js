import React from 'react';
import AppContext from '../AppContext/AppContext'

export default class UpdateGear extends React.Component {
    
    static contextType = AppContext
    
    constructor(props) {
        super(props);

        this.state = {
            name : "",
            type : "Rock Climbing",
            notes : "",
            weight: 0,
            unit : "oz"
          }
    }


    componentDidMount() {
        let gearId = parseInt(this.props.match.params.gearId)
        const gear =  this.context.gear.find(g => g.id === gearId)
        this.setState({
            gearId : gearId,
            name : gear.gear_name,
            type : gear.gear_type,
            notes : gear.notes,
            weight : gear.gear_weight,
            unit : gear.weight_unit
        })
    }


    render() {
        return (
            <div className="add-gear">
                
                <header className="banner">
                    <h1>Add a Piece of Gear</h1>
                    <button onClick={() => this.context.goBack()}>Cancel</button>
                </header>
            
                <section>
                    <form id="add-gear"  onSubmit={e => this.context.updateGear(e, {
                        id: this.state.gearId,
                        user_id: this.context.userId,
                        gear_name: this.state.name,
                        gear_type: this.state.type,
                        notes: this.state.notes,
                        gear_weight: this.state.weight,
                        weight_unit: this.state.unit
        })}>
                        <div className="form-section">
                            <label htmlFor="gear-name">Name</label>
                            <input type="text" name="gear-name" placeholder="Crash Pad" required 
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}/>
                        </div>
                        
                        <div className="gear-type form-section">
                            <label htmlFor="gear-type">Gear Type</label>
                            <select onChange={(e) => this.setState({type: e.target.value})}
                            value={this.state.type}>
                                <option value="Rock Climbing">Rock Climbing</option>
                                <option value="Camping">Camping</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-section">
                            <label htmlFor="gear-weight">Weight</label>
                            <input type="number" name="gear-weight"
                            value={this.state.weight} 
                            onChange={(e) => this.setState({weight: e.target.value})}/>
                            <select 
                                value={this.state.unit}
                                onChange={(e) => this.setState({unit: e.target.value})}>
                                <option value="oz">oz</option>
                                <option value="lbs">lbs</option>
                                <option value="g">g</option>
                            </select>
                        </div>
                        
                        <div className="form-section">
                            <label htmlFor="notes">Notes</label>
                            <textarea name="notes" onChange={(e) => this.setState({notes: e.target.value})}
                            value={this.state.notes || ""}
                            ></textarea>
                        </div>
          
                        <button type="submit">Submit</button>
                      
                    </form>
                </section>
            </div>
        );
    }
}