import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledAlert } from './Alert.styled';
import { variantSettings } from './theme';

const Alert = (props) => {
	const { children, variant } = props;
	return (
		<ThemeProvider theme={variantSettings[variant]}>
			<StyledAlert>{children}</StyledAlert>
		</ThemeProvider>
	);
};

export default Alert;