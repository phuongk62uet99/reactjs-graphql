import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const BookDetails = ({ bookId }) => {

	return (
		<Card bg='info' text='white' className='shadow'>
			<Card.Body>
                <Fragment>
                    <Card.Title>Số đỏ</Card.Title>
                    <Card.Subtitle>Năm xuất bản</Card.Subtitle>
                    <p>Nam cao</p>
                    <p>Age: 70</p>
                    <p>All books by this author</p>
                    <ul>
                        <li key="1">Chị dậu</li>
                        <li key="1">Chị dậu</li>
                    </ul>
                </Fragment>
			</Card.Body>
		</Card>
	)
}

export default BookDetails;
