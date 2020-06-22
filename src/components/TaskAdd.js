import React, { Component } from 'react';
import classes from './style.module.css';

export class TaskAdd extends Component {
	state = {
		task: '',
		buttonDis: false,
	};

	changeHandler = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	submitHandler = (e) => {
		this.setState({ buttonDis: true });
		e.preventDefault();
		console.log(this.state);
		let xhr = new XMLHttpRequest();

		xhr.addEventListener('load', () => {
			console.log(xhr.responseText);
			this.props.updater();
			this.setState({ buttonDis: false, task: '' });
		});
		xhr.open('POST', 'http://127.0.0.1:1234/add');
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({ task: this.state.task }));
	};

	render() {
		return (
			<div className={classes.taskadd}>
				<form className={classes.form}>
					<input
						type="text"
						placeholder="TASK"
						name="task"
						value={this.state.task}
						onChange={this.changeHandler}
						className={classes.input}
						required
					/>
					<button
						onClick={(e) => {
							this.submitHandler(e);
						}}
						className={classes.button}
						disabled={this.state.buttonDis}
					>
						+
					</button>
				</form>
			</div>
		);
	}
}

export default TaskAdd;
