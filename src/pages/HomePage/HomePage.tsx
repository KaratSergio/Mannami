import { CreateEventForm } from '@features/event/createEvent';
import { Title } from '@shared/userExperience';

const HomePage = () => {
  return (
    <div className="container flex flex-col items-center bg-slate-400">
      <Title>Home page</Title>
      <CreateEventForm />
    </div>
  );
};

export default HomePage;
