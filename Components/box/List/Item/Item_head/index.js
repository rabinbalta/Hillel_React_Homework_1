import React from 'react';

import Action from './Action';
import Item_Title from './Item_Title';

class Item_Head extends React.Component {
	render() {
		return (
			<header>
				<Item_Title />,
				<Action />
			</header>
		);
	}
}

export default Item_Head;