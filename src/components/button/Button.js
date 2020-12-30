import React from 'react'
import './style.css'

function Button({type, size, handleClick, loading, children}) {
	const className = `btn ${type} ${size ? size : ''}`;

	return (
		<button className={className} onClick={handleClick} disabled={loading && loading}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	type: 'secondary'
};

export default Button
