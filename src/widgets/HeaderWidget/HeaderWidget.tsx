import { Link } from '@shared/userExperience';
import { NavbarWidget, NavbarAuthWidget } from '@widgets';

const HeaderWidget = () => {
  return (
    <header className="container flex gap-10 bg-slate-300 py-4 justify-between">
      <div className="flex w-full max-w-[690px] justify-between">
        <Link to="/">Logotype</Link>
        <NavbarWidget />
      </div>

      <NavbarAuthWidget />
    </header>
  );
};

export default HeaderWidget;
