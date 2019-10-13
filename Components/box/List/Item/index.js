import React from 'react';

import Item_Head from './Item_head';
import Item_Text from './Item_text';

class Item extends React.Component {
	render() {
		return (
			<li>
				<Item_Head />,
				<Item_Text />
			</li>
		);
	}
}

export default Item;