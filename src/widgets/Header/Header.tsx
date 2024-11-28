import { useState } from 'react';
import { Link, Modal } from '@shared/userExperience';
import { Button } from '@shared/userExperience/Button';
import { Navbar } from '../Navbar';
import { LoginForm, RegistrationForm } from '@features/auth';

const Header = () => {
  const [openModal, setOpenModal] = useState<'login' | 'register' | null>(null);

  const openLoginModal = () => setOpenModal('login');
  const openRegisterModal = () => setOpenModal('register');
  const closeModal = () => setOpenModal(null);

  return (
    <header className="container flex gap-10 bg-slate-300 py-4 justify-between">
      <div className="flex w-full max-w-[690px] justify-between">
        <Link path="/">Logotype</Link>
        <Navbar />
      </div>
      <div className="flex gap-10">
        <Button onClick={openLoginModal}>Login</Button>
        <Button onClick={openRegisterModal}>Register</Button>
      </div>

      {openModal === 'login' && (
        <Modal onClose={closeModal}>
          <LoginForm />
        </Modal>
      )}
      {openModal === 'register' && (
        <Modal onClose={closeModal}>
          <RegistrationForm />
        </Modal>
      )}
    </header>
  );
};

export default Header;
