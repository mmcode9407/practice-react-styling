import React from 'react';
import styled from 'styled-components';

const StyledCardBody = styled.div`
	flex: 1 1 auto;
	min-height: 1px;
	padding: 1.25rem;
`;

const CardBody = ({ children }) => {
	return <StyledCardBody>{children}</StyledCardBody>;
};

export default CardBody;
