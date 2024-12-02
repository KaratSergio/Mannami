import { Link, TextBlock } from '@shared/userExperience';

const MainSectionWidget = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-10 bg-gray-50">
      <div className="text-center md:text-left px-6 md:w-1/2">
        <TextBlock
          title="Manami Meetings"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit odio nostrum dicta corporis molestias
          blanditiis quis neque iure ipsam reiciendis!"
        />
        <div>
          <Link to="" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
            Start
          </Link>
        </div>
      </div>
      <img
        className="mt-8 md:mt-0 max-w-full h-auto rounded-lg shadow-md md:w-1/2"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
        alt="some image"
        width={300}
      />
    </section>
  );
};

export default MainSectionWidget;
