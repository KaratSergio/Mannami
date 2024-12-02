import { Title } from '../Title';

interface PropsTextBlock {
  title: string;
  content: string;
}

const TextBlock = ({ title, content }: PropsTextBlock) => {
  return (
    <div>
      <Title className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</Title>
      <p className="text-base md:text-lg text-gray-600 mb-6">{content}</p>
    </div>
  );
};

export default TextBlock;
