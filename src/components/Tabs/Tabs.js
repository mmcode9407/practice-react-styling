import React, { useState, Children } from 'react';
import styled, { css } from 'styled-components';

const StyledTabs = styled.nav`
	display: flex;
	flex-wrap: wrap;
	padding-left: 0;
	margin-bottom: 0;
	list-style: none;
	border-bottom: 1px solid #dee2e6;
`;

const StyledContent = styled.div`
	display: ${(props) => (props.active ? 'block' : 'none')};
`;

const StyledLink = styled.a`
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

const Tabs = ({ children, defaultActiveKey }) => {
	const [key, setKey] = useState(defaultActiveKey);

	const handleClick = (key) => {
		setKey(key);
	};

	return (
		<>
			<StyledTabs>
				{Children.map(children, (child) => (
					<StyledLink
						active={child.props.eventKey === key}
						onClick={() =>
							!child.props.disabled && handleClick(child.props.eventKey)
						}
						disabled={child.props.disabled}>
						{child.props.title}
					</StyledLink>
				))}
			</StyledTabs>
			{Children.map(children, (child) => (
				<StyledContent active={child.props.eventKey === key}>
					{child}
				</StyledContent>
			))}
		</>
	);
};

export default Tabs;
