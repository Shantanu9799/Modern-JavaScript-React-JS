import { ThemeContext } from "../../context/theme/theme";
import "./card.css";
import { useContext } from 'react';

type CardProps = {
    children : JSX.Element,
    bgColor? : string,
    height? : string,
    padding? : string,
}

export function Card(props : CardProps) {
    const theme = useContext(ThemeContext);
    return(
        <div className={`card ${theme}`} style={{ backgroundColor:props.bgColor, height:`${props.height}rem`, padding:`${props.padding}rem` }}>
            { props.children }
        </div>
    )
}