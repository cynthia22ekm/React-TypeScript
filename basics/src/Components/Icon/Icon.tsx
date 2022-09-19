import { ElementType } from "react";

type IconProps = {
  className?: string;
  height?: number | string;
  vector: ElementType;
};

const Icon: React.FC<IconProps> = ({ className, height, vector: Vector }) => {
  return <Vector className={className} height={height} />;
};

export default Icon;
