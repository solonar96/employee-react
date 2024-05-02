import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{name: 'Thomas J.', salary: 800, increase: true, rise: false, id: 1},
				{name: 'John D. R.', salary: 2000, increase: false, rise: true, id: 2},
				{name: 'Abraham L.', salary: 5000, increase: false, rise: false, id: 3}
			]
		}
		this.maxId = 4;
	}

	deleteItem = (id) => {
		this.setState(({data}) => ({
			data: data.filter(item => item.id !== id)
		}))
	}

	addItem = (name, salary) => {
		const newItem = {
			name: name,
			salary: salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({data}) => ({
			data: data.map(item => item.id === id ? {...item, [prop]: !item[prop]} : item)
		}))
	}

	render() {
		const employees = this.state.data.length,
			  increased = this.state.data.filter(el => el.increase).length;
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased}/>
	
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
	
				<EmployeesList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp} />
				<EmployeesAddForm onAdd={this.addItem}/>
			</div>
		);
	}
}

export default App;