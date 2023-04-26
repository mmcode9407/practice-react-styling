import styled, { css } from 'styled-components';

const DefaultStyledButton = styled.button.attrs((props) => ({
	type: 'button',
	disabled: props.isDisabled,
}))`
	display: inline-block;
	font-weight: 400;
	color: #212529;
	text-align: center;
	vertical-align: middle;
	cursor: pointer;
	user-select: none;
	background-color: transparent;
	border: 1px solid transparent;
	padding: 0.375rem 0.75rem;
	font-size: 1rem;
	line-height: 1.5;
	border-radius: 0.25rem;
	transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
		border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
	&:disabled {
		opacity: 0.65;
	}
`;

const StyledButton = styled(DefaultStyledButton)`
	${(props) => props.theme}
`;

export { StyledButton };
