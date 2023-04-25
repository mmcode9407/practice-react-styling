import React from 'react';

import Button from './../src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
    return (
			<Row>
				<Col>
					<RBButton variant='primary' size='lg' active>
						Button!
					</RBButton>
				</Col>
				<Col>
					<Button variant='primary' size='lg' active>
						Button!
					</Button>
				</Col>
			</Row>
		);
}

export default Task02;

