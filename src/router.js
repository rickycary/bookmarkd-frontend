import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"
import App from "./App"
import { booksLoader, bookLoader } from "./loaders"
import { createAction } from "./actions"
import Index from "./pages/Index"
import Show from "./pages/Show"


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route path="" element={<Index /> } loader={booksLoader} />
			<Route path=":id" element={<Show />} loader={bookLoader} />
			<Route path="create" action={createAction}/>
			<Route path="update/:id" />
			<Route path="delete/:id" />
		</Route>
	)
)

export default router
