import React from 'react';
import { ThemeProvider } from 'styled-components';

import { StyledButton } from './Button.styled';
import { variantSettings } from './theme';

const Button = (props) => {
	const { variant, children, size, disabled = false, active = false } = props;
	return (
		<ThemeProvider
			theme={{
				...variantSettings[variant],
				...variantSettings[size],
			}}>
			<StyledButton isDisabled={disabled} isActive={active}>
				{children}
			</StyledButton>
		</ThemeProvider>
	);
};

export default Button;
