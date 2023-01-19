import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
  const books = useLoaderData()

  return (
    <div>
      <h2>Create a New Bookmark</h2>
      <Form action="/create" method="post">
        <input type="input" name="website" placeholder="website name" />
        <input type="input" name="url" placeholder="website url" />
        <input type="submit" value="Create new bookmark" />
      </Form>

      <h2>Bookmark</h2>
      {books.map(book => (
        <div key={book._id} className="book">
          <Link to={`/${book._id}`}>
            <h1>{book.website}</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Index