import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-400">
      <ul className="flex gap-8">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/premium">Premium</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
