import { FC, HTMLAttributes } from "react"


interface LanguageBadgeProps extends HTMLAttributes<LanguageBadgeProps> {
    icon: any,
    children: React.ReactNode,
    color: string
}

export const LanguageBadge: FC <LanguageBadgeProps> = ({icon, children, color}) => {
    return(
        <div className="flex flex-row justify-center items-center ">
            <div className={`${color} cursor-pointer flex flex-row justify-center items-center gap-2 font-normal py-1 w-4/5 rounded-md`}>
                <div>{icon}</div>
                <h1>{children}</h1>
            </div>
        </div>
    )
}