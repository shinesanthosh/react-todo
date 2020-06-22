import React, { Component } from 'react';
import Tasks from './Tasks';
import classes from './style.module.css';

export class TaskList extends Component {
	state = {
		data: [],
	};

	fetchHandler = () => {
		fetch('http://127.0.0.1:1234/data')
			.then((res) => res.json())
			.then((dat) => {
				const items = [];
				for (let key in dat) {
					items.push(dat[key]['task']);
				}
				this.setState({ data: items });
				// this.forceUpdate();
			});
	};

	componentDidMount() {
		this.fetchHandler();
	}

	render() {
		const elem = [];
		// eslint-disable-next-line
		this.state.data.map((c, k) => {
			elem.push(
				<Tasks key={k} cls={classes.tasks}>
					{c}
				</Tasks>
			);
		});

		return (
			<div className={classes.tasklist}>
				<ul>{elem}</ul>
			</div>
		);
	}
}

export default TaskList;
