import React from 'react';
import AppContext from '../AppContext/AppContext'
import uuid from 'uuid'

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
                    <button onClick={() => this.context.goBack()}>Cancel</button>
                </header>
            
                <section>
                    <form id="add-gear"  onSubmit={e => this.context.addGear(e, {
                        id: uuid.v4(),
                        user_id: 1,
                        name: this.state.name,
                        type: this.state.type,
                        notes: this.state.notes,
                        weight: this.state.weight,
                        unit: this.state.unit
        })}>
                        <div className="form-section">
                            <label for="gear-name">Name</label>
                            <input type="text" name="gear-name" placeholder="Crash Pad" required 
                            onChange={(e) => this.setState({name: e.target.value})}/>
                        </div>
                        
                        <div className="gear-type form-section">
                            <label for="gear-type">Gear Type</label>
                            <select onChange={(e) => this.setState({type: e.target.value})}>
                                <option>Rock Climbing</option>
                                <option>Camping</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="form-section">
                            <label for="gear-weight">Weight</label>
                            <input type="number" name="gear-weight" placeholder="5" 
                            onChange={(e) => this.setState({weight: e.target.value})}/>
                            <select onChange={(e) => this.setState({unit: e.target.value})}>
                                <option>oz</option>
                                <option>lb</option>
                                <option>g</option>
                            </select>
                        </div>
                        
                        <div className="form-section">
                            <label for="notes">Notes</label>
                            <textarea name="notes" onChange={(e) => this.setState({notes: e.target.value})}></textarea>
                        </div>
          
                        <button type="submit">Submit</button>
                      
                    </form>
                </section>
            </div>
        );
    }
}