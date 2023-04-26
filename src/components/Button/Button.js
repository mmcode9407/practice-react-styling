import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledButton } from './Button.styled';
import { variantSettings } from './theme';

const Button = (props) => {
	const { variant, children, size, disabled = false, active = false } = props;
	return (
		<ThemeProvider theme={variantSettings}>
			<StyledButton isDisabled={disabled} isActive={active} variant={variant}>
				{children}
			</StyledButton>
		</ThemeProvider>
	);
};

export default Button;
