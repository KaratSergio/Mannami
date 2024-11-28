import { Navbar } from '../Navbar';
import { Button } from '@shared/userExperience/Button';

const Header = () => {
  return (
    <header className="container flex gap-10 bg-slate-300 py-4 justify-between">
      <div className="flex w-full max-w-[690px] justify-between">
        <p>Logotype</p>
        <Navbar />
      </div>
      <div className="flex gap-10">
        <Button>Login</Button>
        <Button>Register</Button>
      </div>
    </header>
  );
};

export default Header;
