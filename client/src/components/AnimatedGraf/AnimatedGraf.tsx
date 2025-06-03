import { ReactNode } from 'react';
import style from './AnimatedGraf.module.scss'

interface AnimatedGrafProps {
    title: string;
    children: ReactNode;
}

export function AnimatedGraf({title, children}: AnimatedGrafProps) {
    return (
        <div className={style.box}>
            <h2 className={style.title}>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}