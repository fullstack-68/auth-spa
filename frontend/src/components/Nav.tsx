import { type FC } from "react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
const Nav: FC = () => {
  const { user } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="custom-icon">
            <i className="fa-solid fa-xl fa-home"></i>
          </Link>
        </li>
      </ul>

      {user ? (
        <ul>
          <em>{user.name}</em>
          <li>
            <a href="/api/logout" className="custom-icon">
              <i className="fa-solid fa-xl fa-right-from-bracket pico-color-red-400" />
            </a>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/signup" className="custom-icon">
              <i className="fa-solid fa-xl fa-user-plus"></i>
            </Link>
          </li>
          <li>
            <Link to="/login" className="custom-icon">
              <i className="fa-solid fa-xl fa-right-to-bracket"></i>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
