import styled from 'styled-components';

const StyledBreadcrumbItem = styled.li`
	&:not(:last-child):after {
		content: '/';
		display: inline-block;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		color: #6c757d;
	}
`;

const StyledLink = styled.a`
	&:not([href]) {
		color: ${(props) => (props.isActive ? '#6c757d' : '#007bff')};
		&:hover {
			color: ${(props) => (props.isActive ? '#6c757d' : '#007bff')};
		}
	}
`;

export { StyledBreadcrumbItem, StyledLink };
