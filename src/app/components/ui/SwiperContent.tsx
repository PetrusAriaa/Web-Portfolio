import {FC, JSXElementConstructor} from "react";
import {IconType} from "react-icons/lib";

interface Item {
  title: string;
  icon: JSX.Element;
  color: string;
}

interface SwiperContentProps {
  category: Item[];
}

export type Category = Item[];

const SwiperContent: FC<SwiperContentProps> = ({category}) => {
  return (
    <div className="text-myWhite ">
      <ul>
        {category.map((item: Item, index: number) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SwiperContent;
