import { useState } from 'react';
import { Modal, Button } from '@shared/userExperience';
import { LoginForm, RegistrationForm } from '@features/auth';

const NavbarAuthWidget = () => {
  const [openModal, setOpenModal] = useState<'login' | 'register' | null>(null);

  const openLoginModal = () => setOpenModal('login');
  const openRegisterModal = () => setOpenModal('register');
  const closeModal = () => setOpenModal(null);

  return (
    <div className="flex gap-10">
      <Button onClick={openLoginModal}>Login</Button>
      <Button onClick={openRegisterModal}>Register</Button>

      {openModal === 'login' && (
        <Modal onClose={closeModal}>
          <LoginForm close={closeModal} />
        </Modal>
      )}
      {openModal === 'register' && (
        <Modal onClose={closeModal}>
          <RegistrationForm close={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default NavbarAuthWidget;
