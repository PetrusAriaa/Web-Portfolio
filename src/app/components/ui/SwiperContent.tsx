import {FC} from "react";

interface SwiperContentProps {
  category: string;
}

const SwiperContent: FC<SwiperContentProps> = ({category}) => {
  return (
    <div className="text-myWhite ">
      <h1>{category}</h1>
    </div>
  );
};

export default SwiperContent;
