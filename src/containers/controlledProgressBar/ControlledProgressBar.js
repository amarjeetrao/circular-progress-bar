import React, { Component } from 'react'

import ProgressBar from '../../components/progress/ProgressBar'
import Button from '../../components/button/Button'

import Style from './style.module.css'

export default class ControlledProgressBar extends Component {
	render() {
		return (
			<div className={Style.ControlledProgressBar}>
				<ProgressBar
					progress={20}
					size={235}
					strokeWidth={12}
					strokeStyle='round'
					circleBgStroke='white'
					circleStroke='#0ebffd'
				/>
				<Button type='primary'>Start</Button>
				<Button>Pause</Button>
			</div>
		);
	}
}
