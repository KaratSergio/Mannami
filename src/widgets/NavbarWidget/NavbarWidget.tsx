import { NavLink } from 'react-router-dom';

const NavbarWidget = () => {
  return (
    <nav className="bg-gray-400">
      <ul className="flex gap-8">
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarWidget;
