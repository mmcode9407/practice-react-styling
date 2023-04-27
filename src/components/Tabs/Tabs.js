import React, { useState, Children } from 'react';
import { StyledTabs, StyledLink, StyledContent } from './Tabs.styled';

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
