import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import { getSingleBook } from '../graphql-client/queries'
import { useQuery } from '@apollo/client'

const BookDetails = ({ bookId }) => {
    const { loading, error, data } = useQuery(getSingleBook, {
		variables: {
			id: bookId
		},
		skip: bookId === null
	});

    if (loading) return <p>Loading book details...</p>

	if (error) {
		return <p>Error loading book details!</p>
	}

    var books = bookId === null ? null : data.book;

	return (
		<Card bg='info' text='white' className='shadow'>
			<Card.Body>
                {books === null ? 
                    <Card.Text>Please select a book</Card.Text>
                    : (
                        <Fragment>
                            <Card.Title>Tên sách : {books.name}</Card.Title>
                            <Card.Subtitle>Lần xuất bản : {books.genre}</Card.Subtitle>
                            <p>Tác giả : {books.author.name}</p>
                            <p>Tuổi: {books.author.age}</p>
                            <p>All books by this author</p>
                            <ul>
                                {books?.author.books.map(book => (
                                    <li key={book.id}>{book.name}</li>
                                ))}
                            </ul>
                        </Fragment>
                    )}
			</Card.Body>
		</Card>
	)
}

export default BookDetails;
