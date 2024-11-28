import { RegistrationForm } from '@features/auth/registrationForm';
import { Button, Modal } from '@shared/userExperience';
import { useState } from 'react';

const RegistrationPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h1>Register</h1>
      <Button type="button" onClick={toggleModal} className="bg-indigo-600 text-white py-2 px-4 rounded-md">
        Open
      </Button>
      {isOpen && (
        <Modal onClose={toggleModal}>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default RegistrationPage;
