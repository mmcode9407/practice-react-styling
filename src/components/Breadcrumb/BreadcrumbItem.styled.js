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

export default StyledBreadcrumbItem;
