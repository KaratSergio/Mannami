import { Icon } from '@shared/icons';
import { Button } from '@shared/formControls';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="m-auto flex items-center justify-center text-fuchsia-600">Home page</h1>
      <Icon id="icon-google" fill="fill-blue-500" stroke="stroke-yellow" className="bg-yellow-200" />
      <Button className="bg-red-500">Hello</Button>
    </div>
  );
};

export default HomePage;
