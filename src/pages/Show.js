import { useLoaderData, Form } from "react-router-dom"

function Show(props){
	const book = useLoaderData()

	return(
		<div className="book">
			<h1>{book.website}</h1>
			<h2>{book.url}</h2>

		
		<h2>Update {book.website}</h2>
			<Form action={`/update/${book._id}`} method="post">
        		<input type="input" name="website" placeholder="Website Name" />
        		<input type="input" name="url" placeholder="URL" />
			</Form>
		</div>
	)
}

export default Show