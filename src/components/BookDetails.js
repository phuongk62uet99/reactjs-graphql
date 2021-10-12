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
	});
    console.log(data);

    if (loading) return <p>Loading book details...</p>

	if (error) {
		return <p>Error loading book details!</p>
	}

	return (
		<Card bg='info' text='white' className='shadow'>
			<Card.Body>
                {data === null ? 
                    <Card.Text>Please select a book</Card.Text>
                    : (
                        <Fragment>
                            <Card.Title>Tên sách : {data?.book.name}</Card.Title>
                            <Card.Subtitle>Lần xuất bản : {data?.book.genre}</Card.Subtitle>
                            <p>Tác giả : {data?.book.author.name}</p>
                            <p>Tuổi: {data?.book.author.age}</p>
                            <p>All books by this author</p>
                            <ul>
                                {data?.book.author.books.map(book => {
                                    <li key={book.id}>{book.name}</li>
                                })}
                            </ul>
                        </Fragment>
                    )}
			</Card.Body>
		</Card>
	)
}

export default BookDetails;
