import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
			items: []
		};
	}

	render() {
		return (
			<div>
				<form onSubmit={this._handleSubmit}>
					<input onChange={this._updateText} value={this.state.text} placeholder="Type something here!" 
          />
				</form>
				<h1>{this.state.text}</h1>
        <ul>
        {this.state.items.map((items, index) => 
        
            <li 
            key={index}
            //onClick={this.deleteItemHandler}
            onClick={() => {
              this.filterItems(index)}}
              >
              {items}
            </li>

            
        )}
        </ul>
			</div>
		);
	}

	_handleSubmit = (event) => {
    event.preventDefault();
		this.setState(state => {
			const items = [ ...state.items, state.text ];
			return {
        items
			};
		});
	};

	deleteItemHandler = (index) => {
    //const persons = this.state.persons.slice();
		const items = [ ...this.state.items ];
		items.splice(index, 1);
		this.setState({ items: items });
  };
  
  filterItems = (index) => {
   
    const items = [...this.state.items];
    const newItems = items.filter((item) => item.index !== index)
    this.setState({ items: newItems })
  }

	_updateText = (event) => {
		//console.log(event.target.value);
		this.setState({
			text: event.target.value
		});
	};
}

export default App;
