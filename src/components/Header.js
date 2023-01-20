import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div><h2>Bookmarks</h2></div>
      </Link>
    </nav>
  )
}

export default Header