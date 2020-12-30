import React, { Component } from 'react'

import ProgressBar from '../../components/progress/ProgressBar'
import Button from '../../components/button/Button'

import Style from './style.module.css'

export default class ControlledProgressBar extends Component {
	constructor(props) {
		super(props);

		this.timer = 0;
		this.IntervalSpeed = 100;

		this.state = {
			loading: false,
			progress: 0
		};
	}

	startProgress = () => {

		this.timer = setInterval(() => {
			this.setState(prevState => ({
				loading: true,
				progress: prevState.progress + 1
			}));
		}, this.IntervalSpeed);

	}

	pauseProgress = () => {
		clearInterval(this.timer);
		this.setState({ loading: false })

		if (this.state.progress === 100) {
			this.setState({ loading: false, progress: 0 })
		}
	}

	componentDidUpdate(prevProp, prevState) {
		if (prevState.progress >= 99) {
			clearInterval(this.timer);
		}

	}

	render() {
		return (
			<div className={Style.ControlledProgressBar}>
				<ProgressBar
					progress={this.state.progress}
					size={235}
					strokeWidth={12}
					strokeStyle='round'
					circleBgStroke='white'
					circleStroke='#0ebffd'
				/>
				<Button
					type='primary'
					handleClick={this.startProgress}
					loading={this.state.loading}>
					Start
				</Button>
				<Button handleClick={this.pauseProgress}>{this.state.progress === 100 ? 'Reset' : 'Pause'}</Button>
			</div>
		);
	}
}
