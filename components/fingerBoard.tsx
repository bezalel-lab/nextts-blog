import String from "./string";
import Fret from "./fret";
import checker from "../styles/checker.module.css";

export default function FingerBoard(props) {
    return (
        <div className={checker.fingerBoard}>
            {props.children}
        </div>
    )
}
