import {FC} from "react";
import {LanguageBadge} from "./LanguageBadge";

export type Category = Item[];

interface Item {
  title: string;
  icon: JSX.Element;
  color: string;
}

interface SwiperContentProps {
  category: Item[];
}

const SwiperContent: FC<SwiperContentProps> = ({category}) => {
  return (
    <div className="text-myWhite ">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 p-2 md:p-4">
        {category.map((item: Item, index: number) => (
          <li key={index}>
            <LanguageBadge colorOption={item.color} icon={item.icon}>
              {item.title}
            </LanguageBadge>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SwiperContent;
