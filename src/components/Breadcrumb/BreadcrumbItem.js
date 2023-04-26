import React from 'react';
import { StyledBreadcrumbItem, StyledLink } from './BreadcrumbItem.styled';

const BreadcrumbItem = (props) => {
	const { href = null, isActive = false, children } = props;
	return (
		<StyledBreadcrumbItem>
			<StyledLink href={href} isActive={isActive}>
				{children}
			</StyledLink>
		</StyledBreadcrumbItem>
	);
};

export default BreadcrumbItem;
