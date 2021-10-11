import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const BookForm = () => {
	const [newBook, setNewBook] = useState({
		name: '',
		genre: '',
		authorId: ''
	})

	const { name, genre, authorId } = newBook;

	const onInputChange = event => {
        console.log(event);
	}

	const onSubmit = event => {
		event.preventDefault()
		console.log('test deploy')
	}

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Book name'
					name='name'
					onChange={onInputChange}
					value={name}
					required
				/>
			</Form.Group>
			<Form.Group>
				<Form.Control
					type='text'
					placeholder='Book genre'
					name='genre'
					onChange={onInputChange}
					value={genre}
					required
				/>
			</Form.Group>
			<Form.Group>
                <Form.Control
                    as='select'
                    name='authorId'
                    onChange={onInputChange}
                    value={authorId}
                    required
                >
                    <option value='' disabled>
                        Select author
                    </option>
                    <option key={"123"} value={"NguyenPhuong"}>
                        Nguyen Phuong
                    </option>
                </Form.Control>
			</Form.Group>
			<Button className='float-right' variant='info' type='submit'>
				Add Book
			</Button>
		</Form>
	)
}

export default BookForm
