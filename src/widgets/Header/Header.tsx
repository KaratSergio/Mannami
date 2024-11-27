import { Navbar } from '../Navbar';
import { Button } from '@shared/formControls';

const Header = () => {
  return (
    <header className="flex gap-10 mx-auto bg-slate-300 p-4">
      <p>Logotype</p>
      <Navbar />
      <Button>Login</Button>
    </header>
  );
};

export default Header;
