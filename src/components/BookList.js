import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BookDetails from './BookDetails';

const BookList = () => {
	const [bookSelected, setBookSelected] = useState(null)

	return (
		<Row>
			<Col xs={8}>
				<CardColumns>
                    <Card
                        border='info'
                        text='info'
                        className='text-center shadow'
                        key="123"
                        style={{ cursor: 'pointer' }}
                    >
                        <Card.Body>"Những người khốn khổ</Card.Body>
                    </Card>
					<Card
                        border='info'
                        text='info'
                        className='text-center shadow'
                        key="123"
                        style={{ cursor: 'pointer' }}
                    >
                        <Card.Body>"Những người khốn khổ</Card.Body>
                    </Card>
					<Card
                        border='info'
                        text='info'
                        className='text-center shadow'
                        key="123"
                        style={{ cursor: 'pointer' }}
                    >
                        <Card.Body>"Những người khốn khổ</Card.Body>
                    </Card>
				</CardColumns>
			</Col>
			<Col>
				<BookDetails bookId={bookSelected} />
			</Col>
		</Row>
	)
}

export default BookList
