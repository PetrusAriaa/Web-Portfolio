import {FC, HTMLAttributes} from "react";

interface LanguageBadgeProps extends HTMLAttributes<LanguageBadgeProps> {
  icon: any;
  children: React.ReactNode;
  color: string;
}

export const LanguageBadge: FC<LanguageBadgeProps> = ({
  icon,
  children,
  color,
}) => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div
        className={`${color} cursor-pointer flex flex-row justify-center items-center gap-2 py-1 min-w-fit w-4/5 md:w-full rounded-md`}
      >
        <div>{icon}</div>
        <h1 className="select-none font-medium text-xs lg:text-base">
          {children}
        </h1>
      </div>
    </div>
  );
};
