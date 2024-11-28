import { LoginForm } from '@features/auth/loginForm';
import { Button, Modal } from '@shared/userExperience';
import { useState } from 'react';

const LoginPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-6">Login Page</h1>
      <Button type="button" onClick={toggleModal} className="bg-indigo-600 text-white py-2 px-4 rounded-md">
        Open Login Form
      </Button>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginPage;
