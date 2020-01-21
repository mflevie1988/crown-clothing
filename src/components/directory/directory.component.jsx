import React from 'react';
import MenuItem from '../menu-item/menu-itme.component';

import SECTIONS_DATA from './sections.data';
import './directory.styles.scss';

class Directory extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sections: SECTIONS_DATA
		};
	}

	render() {
		//<MenuItem key={id} {...otherSectionProps} /> === <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
		return (
			<div className='directory-menu'>
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
