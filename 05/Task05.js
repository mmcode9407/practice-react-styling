import React from 'react';
import Button from '../src/components/Button';
import {
	Card,
	CardImg,
	CardBody,
	CardTitle,
	CardText,
} from '../src/components/Card';
import { Row, Col, Card as RBCard, Button as RBButton } from 'react-bootstrap';

const Task05 = () => {
	return (
		<Row>
			<Col>
				<RBCard style={{ width: '18rem' }}>
					<RBCard.Img variant='top' src='https://picsum.photos/100/80' />
					<RBCard.Body>
						<RBCard.Title>Card Title</RBCard.Title>
						<RBCard.Text>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</RBCard.Text>
						<RBButton variant='primary'>Go somewhere</RBButton>
					</RBCard.Body>
				</RBCard>
			</Col>
			<Col>
				<Card style={{ width: '18rem' }}>
					<CardImg variant='top' src='https://picsum.photos/100/80' />
					<CardBody>
						<CardTitle>Card Title</CardTitle>
						<CardText>
							Some quick example text to build on the card title and make up the
							bulk of the card's content.
						</CardText>
						<Button variant='primary'>Go somewhere</Button>
					</CardBody>
				</Card>
			</Col>
		</Row>
	);
};

export default Task05;

