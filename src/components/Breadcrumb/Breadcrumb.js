import React from 'react';
import StyledBreadcrumb from './Breadcrumb.styled';

const Breadcrumb = (props) => {
	return <StyledBreadcrumb>{props.children}</StyledBreadcrumb>;
};

export default Breadcrumb;
