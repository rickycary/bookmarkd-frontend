import { Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <Link to="/">
        <div>Bookmarkd App</div>
      </Link>
    </nav>
  )
}

export default Header