import React, { Component } from 'react';

class Input extends Component {
    constructor(){
        super();
        this.state = {
            term: ''
        };

        this.updateInput = this.updateInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateInput(event) {
        this.setState({ term: event.target.value });
    }
    
    handleSubmit() {
        console.log("Your input value is: " + this.state.term);
        this.props.onInputSubmit(this.state.term);
    }
    
    render() { 
        return (
        <div className='search-container'>
            <input className='search-input' type="text" onChange={this.updateInput} />
            <input className='btn' type="submit" value = "Search"onClick={this.handleSubmit} /> 
        </div>
    );
    }
}

export default Input;