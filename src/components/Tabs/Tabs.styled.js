import styled, { css } from 'styled-components';

export const StyledTabs = styled.nav`
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	border-bottom: 1px solid #dee2e6;
`;

export const StyledContent = styled.div`
	display: ${(props) => (props.active ? 'block' : 'none')};
`;

export const StyledLink = styled.a`
	&:not([href]) {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		margin-bottom: -1px;
		display: block;
		padding: 0.5rem 1rem;
		cursor: ${(props) => !props.disabled && 'pointer'};
		background-color: transparent;
		color: #007bff;
		text-decoration: none;

		${(props) =>
			!props.active &&
			css`
				&:hover {
					color: #0056b3;
					border-color: #e9ecef #e9ecef #dee2e6;
				}
			`}

		${(props) =>
			props.disabled &&
			css`
				color: #6c757d;
				&:hover {
					color: #6c757d;
					background-color: transparent;
					border-color: transparent;
				}
			`}

		${(props) =>
			props.active &&
			css`
				color: #495057;
				background-color: #fff;
				border-color: #dee2e6 #dee2e6 #fff;
				&:hover {
					color: #495057;
				}
			`}
	}
`;
