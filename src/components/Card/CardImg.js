import React from 'react';
import styled, { css } from 'styled-components';

const StyledCardImg = styled.img`
	flex-shrink: 0;
	width: 100%;
	${(props) =>
		props.variant === 'top' &&
		css`
			border-top-left-radius: calc(0.25rem - 1px);
			border-top-right-radius: calc(0.25rem - 1px);
		`}
	${(props) =>
		props.variant === 'bottom' &&
		css`
			border-bottom-left-radius: calc(0.25rem - 1px);
			border-bottom-right-radius: calc(0.25rem - 1px);
		`}
`;

const CardImg = ({ src, variant }) => {
	return <StyledCardImg src={src} variant={variant} />;
};

export default CardImg;
