import { FC, HTMLAttributes } from "react"


interface LanguageBadgeProps extends HTMLAttributes<LanguageBadgeProps> {
    icon: any,
    children: React.ReactNode,
    color: string
}

export const LanguageBadge: FC <LanguageBadgeProps> = ({icon, children, color}) => {
    return(
        <div className={`${color} flex flex-row justify-center items-center gap-2 font-normal px-6 py-1 rounded-md`}>
            <div>{icon}</div>
            <h1>{children}</h1>
        </div>
    )
}