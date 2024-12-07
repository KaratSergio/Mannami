import { CreateEventForm } from '@features/event/createEvent';
import { MainSectionWidget } from '@widgets';

const HomePage = () => {
  return (
    <div className="container flex flex-col items-center bg-slate-400">
      <MainSectionWidget />
      <CreateEventForm />
    </div>
  );
};

export default HomePage;
