import { IconProps } from './Icon.types';
import { spritePath } from '@shared/icons';

const Icon: React.FC<IconProps> = ({
  id,
  width = '24px',
  height = '24px',
  className = '',
  fill = 'fill-transparent',
  stroke = 'stroke-black',
}) => {
  return (
    <svg className={`${fill} ${stroke} ${className}`} width={width} height={height}>
      <use href={`${spritePath}#${id}`} />
    </svg>
  );
};

export default Icon;
