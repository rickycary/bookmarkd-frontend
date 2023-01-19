import { useLoaderData, Form } from "react-router-dom"

function Show(props){
	const book = useLoaderData()

	return (
		<div className="body">
			<h1>{book.website}</h1>
			<h2>
				<a href={book.url}>{book.url}</a>
			</h2>

			<h2>Update {book.website}</h2>
			<Form action={`/update/${book._id}`} method="post">
				<input type="input" name="website" placeholder={book.website} />
				<input type="input" name="url" placeholder="URL" />
				<input type="submit" value={`Update`} />
			</Form>

			<h2>Delete Book</h2>
			<Form action={`/delete/${book._id}`} method="post">
				<input type="submit" value={`Delete`} />
			</Form>
		</div>
	)
}

export default Show