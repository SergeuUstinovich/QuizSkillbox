import { SvgType } from "../../../types/SvgType";
import { classNames } from "../../../utils/classNames";
import style from "./LoaderContent.module.scss";

export const LoaderContent = ({className = ''}: SvgType) => (
    <span className={classNames(style.loader , {}, [className])}></span>
);
