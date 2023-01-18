const URL = "https://book-api-q5e1.onrender.com"

export const booksLoader = async () => {
  const response = await fetch(URL + "/book")
  const books = await response.json()
  return books
}