import { Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const books = useLoaderData()

  return books.map(book => (
    <div key={book._id} className="book">
      <Link to={`/${book._id}`}>
        <h1>{book.website}</h1>
      </Link>
    </div>
  ))
}

export default Index