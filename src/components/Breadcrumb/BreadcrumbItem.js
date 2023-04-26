import React from 'react';
import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
	&:not(:last-child):after {
		content: '/';
		display: inline-block;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		color: #6c757d;
	}
`;

const StyledLink = styled.a`
	/* color: red; */
	/* color: ${(props) => (props.active ? '#6c757d' : '#007bff')}; */

	/* &:hover {
		color: ${(props) => props.active && 'none'};
	} */
`;

const BreadcrumbItem = (props) => {
	const { href = null, active = false, children } = props;
	return (
		<StyledBreadcrumbItem>
			<StyledLink href={href} active={active}>
				{children}
			</StyledLink>
		</StyledBreadcrumbItem>
	);
};

export default BreadcrumbItem;
