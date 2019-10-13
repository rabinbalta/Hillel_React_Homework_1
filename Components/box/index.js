import React from 'react';

import Title from './Title';
import Form from './Form';
import List from './List';

class Box extends React.Component {
	render() {
		return (
			<div>
				<Title />,
				<Form />,
				<List />
			</div>
		);
	}
}
