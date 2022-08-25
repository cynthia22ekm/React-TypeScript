import { ElementType } from "react";

type IconProps = {
  className: string;
  vector: ElementType;
};

const Icon: React.FC<IconProps> = ({ className, vector: Vector }) => {
  return <Vector className={className} color={"blue"} />;
};

export default Icon;
