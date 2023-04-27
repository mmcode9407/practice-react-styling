import React from 'react';
import styled from 'styled-components';

const StyledCardTitle = styled.h5`
	margin-bottom: 0.75rem;
`;

const CardTitle = ({ children }) => {
	return <StyledCardTitle>{children}</StyledCardTitle>;
};

export default CardTitle;
