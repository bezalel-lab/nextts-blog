import String from "./string";
import Fret from "./fret";
import checker from "../styles/checker.module.css";

export default function FingerBoard(props) {
    const degree = "P5";
    return (
        <div className={checker.fingerBoard}>
            FingerBoard
            {props.children}
        </div>
    )
}
