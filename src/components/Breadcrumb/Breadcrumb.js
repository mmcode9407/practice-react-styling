import React from 'react';
import styled from 'styled-components';

const StyledBreadcrumb = styled.ul`
	display: flex;
	flex-wrap: wrap;
	padding: 0.75rem 1rem;
	margin-bottom: 1rem;
	list-style: none;
	background-color: #e9ecef;
	border-radius: 0.25rem;
`;

const Breadcrumb = (props) => {
	return <StyledBreadcrumb>{props.children}</StyledBreadcrumb>;
};

export default Breadcrumb;
