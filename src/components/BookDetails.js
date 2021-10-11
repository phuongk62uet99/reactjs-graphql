import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import { getSingleBook } from '../graphql-client/queries'
import { useQuery } from '@apollo/client'

const BookDetails = ({ bookId }) => {
    console.log(bookId);
    const { loading, error, data } = useQuery(getSingleBook, {
		variables: {
			id: bookId
		},
		skip: bookId === null
	})

    if (loading) return <p>Loading book details...</p>

	if (error) {
		return <p>Error loading book details!</p>
	}

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
