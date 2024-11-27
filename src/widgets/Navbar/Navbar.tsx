import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-400">
      <ul className="flex gap-8">
        <li>
          <NavLink to="/">Page-1</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Page-2</NavLink>
        </li>
        <li>
          <NavLink to="/premium">Page-3</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
