import React from 'react';

import Edit from './Edit';
import Delete from './Delete';

class Action extends React.Component {
	render() {
		return (
			<div>
				<Edit />,
				<Delete />
			</div>
		);
	}
}

export default Action;