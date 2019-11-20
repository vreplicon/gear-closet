import React from 'react';
import './AddGear.css'
import AppContext from '../AppContext/AppContext'

export default class AddGear extends React.Component {
    
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


    render() {
        return (
            <div className="add-gear">
                
                <header className="banner">
                    <h1>Add a Piece of Gear</h1>
                    <button onClick={() => this.context.goBack()}>Go Back</button>
                </header>
            
                <section>
                    <form id="add-gear"  onSubmit={e => this.context.addGear(e, {
                        user_id: this.context.userId,
                        gear_name: this.state.name,
                        gear_type: this.state.type,
                        notes: this.state.notes,
                        gear_weight: this.state.weight,
                        weight_unit: this.state.unit
        })}>
                        <div className="form-section">
                            <label for="gear-name">Name</label>
                            <input className="gear-name" type="text" name="gear-name" placeholder="Crash Pad" required 
                            onChange={(e) => this.setState({name: e.target.value})}/>
                        </div>
                        
                        <div className="gear-type form-section">
                            <label htmlFor="gear-type">Gear Type</label>
                            <select className="dropdown" onChange={(e) => this.setState({type: e.target.value})}>
                                <option>Rock Climbing</option>
                                <option>Camping</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="form-section">
                            <label htmlFor="gear-weight">Weight (Optional)</label>
                            <input className="gear-weight" type="number" name="gear-weight" placeholder="5" 
                            onChange={(e) => this.setState({weight: e.target.value})}/>
                            <select className="dropdown" onChange={(e) => this.setState({unit: e.target.value})}>
                                <option>oz</option>
                                <option>lb</option>
                                <option>g</option>
                            </select>
                        </div>
                        
                        <div className="form-section">
                            <label for="notes">Notes (Optional)</label>
                            <textarea className="gear-notes" name="notes" onChange={(e) => this.setState({notes: e.target.value})}></textarea>
                        </div>
          
                        <button type="submit">Submit</button>
                        <button onClick={() => this.context.goBack()}>Cancel</button>
                      
                    </form>
                </section>
            </div>
        );
    }
}