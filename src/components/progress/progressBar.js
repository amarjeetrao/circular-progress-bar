import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import Style from './style.module.css';

function ProgressBar({
	size,
	progress,
	strokeWidth,
	circleBgStroke,
	circleStroke,
	strokeStyle,
	strokeOffset
}) {
	const circleCenter = size / 2;
	const radius = circleCenter - strokeWidth / 2;
	const circumference = 2 * Math.PI * radius;
	const startOffset = 90 + strokeOffset;

	const [offset, setOffset] = useState(0);

	useEffect(() => {
		const progressOffset = ((100 - progress) / 100) * circumference;
		setOffset(progressOffset);
	}, [setOffset, circumference, progress, offset]);

	return (
		<div>
			<svg className={Style.progressSvg} width={size} height={size}>
				<circle
					className={Style.circleBg}
					stroke={circleBgStroke}
					cx={circleCenter}
					cy={circleCenter}
					r={radius}
					strokeWidth={strokeWidth}
					strokeDasharray={circumference}>
					{' '}
				</circle>
				<circle
					className={Style.circle}
					stroke={circleStroke}
					cx={circleCenter}
					cy={circleCenter}
					r={radius}
					strokeWidth={strokeWidth}
					strokeLinecap={strokeStyle}
					strokeDasharray={circumference}
					strokeDashoffset={offset}
					style={{transform: `rotate(${startOffset}deg)`}}>
					{' '}
				</circle>
				<text
					className={Style.progressNumber}
					x={circleCenter}
					y={circleCenter}>
					{' '}
					{progress}%{' '}
				</text>
			</svg>
		</div>
	);
}

ProgressBar.propTypes = {
	size: PropTypes.number.isRequired,
	progress: PropTypes.number.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	strokeOffset: PropTypes.number,
	circleBgStroke: PropTypes.string.isRequired,
	circleStroke: PropTypes.string.isRequired,
	strokeStyle: PropTypes.string,
};

export default ProgressBar;
