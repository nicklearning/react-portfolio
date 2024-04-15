import { Link } from 'react-router-dom';

function NavTabs() {

  return (
    <ul>
      <li >
        <Link
          to="/"
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          to="/Portfolio"
        >
          Portfolio
        </Link>
      </li>
      <li >
        <Link
          to="/Contact"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          to="/About"
        >
          About
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
