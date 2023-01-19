import { useLoaderData, Form, Link } from 'react-router-dom'

function Show(props) {
  const book = useLoaderData()

  return (
    <div className="show">
      <h1>{book.website}</h1>
      <h2>
        <a href={book.url} target="_blank" rel="noreferrer">{book.url}</a>
      </h2>

      
      <Form action={`/update/${book._id}`} method="post" >
        <input type="input" name="website" placeholder={book.website} />
        <input type="input" name="url" placeholder="URL" />
        <input type="submit" value={`Update`} className='links'/>
      </Form>

   
      <Form action={`/delete/${book._id}`} method="post">
        <input type="submit" value={`Delete`} className='links'/>
      </Form>


      <div className='return-link'>
        <Link to="/" className='links'>Return</Link>
      </div>
    </div>
  )
}

export default Show
