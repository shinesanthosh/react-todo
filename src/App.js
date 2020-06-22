import React, { Component } from 'react';
import classes from './App.module.css';

import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';

export class App extends Component {
	state = {
		update: false,
	};
	updateHandler = () => {
		console.log('Update Requested');
		this.refs.lister.fetchHandler();
	};

	render() {
		return (
			<div className={classes.App}>
				<TaskList up={this.state.update} ref="lister" />
				<TaskAdd updater={this.updateHandler} />
			</div>
		);
	}
}

export default App;
