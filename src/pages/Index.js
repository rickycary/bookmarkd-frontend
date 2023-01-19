import { Form, Link, useLoaderData } from 'react-router-dom'

function Index(props) {
  const books = useLoaderData()

  return (
    <div className="body">
      <div className='index-form'>
        <p>Create a New Bookmark</p>
        <Form action="/create" method="post">
          <input type="input" name="website" placeholder="website name" />
          <span> </span>
          <input type="input" name="url" placeholder="website url" />
          <input type="submit" value="Add" />
        </Form>
      </div>

      {books.map((book) => (
        <div key={book._id} className="book">
         <Link to={`/${book._id}`} className='links'>
            <p>{book.website}</p>
          </Link>
          <Form action={`/delete/${book._id}`} method="post">
				<input id='delete' type="submit" value="X" />
			</Form>
        </div>
        
      ))}
    </div>
  )
}

export default Index
