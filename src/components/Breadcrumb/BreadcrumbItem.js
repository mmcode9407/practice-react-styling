import React from 'react';
import StyledBreadcrumbItem from './BreadcrumbItem.styled';

const BreadcrumbItem = (props) => {
	const { href = null, active = false, children } = props;
	return (
		<StyledBreadcrumbItem>
			<a href={href} active={active}>
				{children}
			</a>
		</StyledBreadcrumbItem>
	);
};

export default BreadcrumbItem;
