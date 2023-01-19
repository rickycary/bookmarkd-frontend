const URL = "https://book-api-q5e1.onrender.com"

export const booksLoader = async () => {
  const response = await fetch(URL + "/book")
  const books = await response.json()
  return books
}

export const bookLoader = async ({params}) => {
  const response = await fetch(URL + "/book/" + params.id)
  const book = await response.json()
  return book
}