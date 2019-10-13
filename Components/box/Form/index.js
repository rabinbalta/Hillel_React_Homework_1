import React from 'react';

import Post from './Post';
import Name_Label from './Name_Label';
import Name_Input from './Name_Input';
import Comment_Label from './Comment_Label';
import Comment_Input from './Comment_Input';

class Form extends React.Component {
	render() {
		return (
			<div>
				<Name_Label />,
				<Name_Label />,
				<Comment_Label />,
				<Comment_Input />,
				<Post />
			</div>
		);
	}
}

export default Form;