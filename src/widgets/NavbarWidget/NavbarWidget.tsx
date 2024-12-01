import { NavLink } from 'react-router-dom';

const NavbarWidget = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'text-blue-500' : 'text-black');

  return (
    <nav className="bg-gray-400">
      <ul className="flex gap-8">
        <li>
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={getLinkClass}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/events" className={getLinkClass}>
            Events
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarWidget;
