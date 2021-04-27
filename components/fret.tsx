import checker from "../styles/checker.module.css";

export default function Fret(props) {
    return (
        <div className={checker.fret}>
            {props.children}
        </div>
    )
}
