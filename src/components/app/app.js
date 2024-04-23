import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

	const data = [
		{name: 'Thomas J.', salary: 800, increase: true},
		{name: 'John D. R.', salary: 2000, increase: false},
		{name: 'Abraham L.', salary: 5000, increase: false}
	]

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>

			<EmployeesList data={data}/>
			<EmployeesAddForm />
		</div>
	);
}

export default App;