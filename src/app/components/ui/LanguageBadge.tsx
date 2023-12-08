import {FC, HTMLAttributes} from "react";

interface LanguageBadgeProps extends HTMLAttributes<HTMLButtonElement> {
  icon: any;
  colorOption: string;
}

export const LanguageBadge: FC<LanguageBadgeProps> = ({
  icon,
  colorOption,
  ...props
}) => {
  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div
        className={`${colorOption} cursor-pointer flex flex-row justify-center items-center gap-2 py-1 min-w-fit w-4/5 md:w-full rounded-md`}
      >
        <div>{icon}</div>
        <h1 className="select-none font-medium text-xs lg:text-base">
          {props.children}
        </h1>
      </div>
    </div>
  );
};
