import { useLoaderData } from "react-router-dom"

function Show(props){
	const book = useLoaderData()

	return(
		<div className="book">
			<h1>{book.website}</h1>
			<h2>{book.url}</h2>
		</div>
	)
}

export default Show