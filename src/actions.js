import { redirect } from "react-router-dom"

const URL = "https://book-api-q5e1.onrender.com"

export const createAction = async ({ request }) => {
  // get data from form
  const formData = await request.formData()
  // set up our new person to match schema
  const newBook = {
    website: formData.get("website"),
    url: formData.get("url"),
  }
  // Send new bookmark to our API
  await fetch(URL + "/book", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBook),
  })
  // redirect to index
  return redirect("/")
}

export const updateAction = async ({ request, params }) => {

	const formData = await request.formData()
	
	const updatedBook = {
		website: formData.get("website"),
		url: formData.get("url"),
	}
	
	await fetch(URL + "/book/" + params.id, {
		method: "put",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(updatedBook),
	})
	// redirect to index
	return redirect("/")
}