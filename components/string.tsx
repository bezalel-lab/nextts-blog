import Fret from "../components/fret";
import checker from "../styles/checker.module.css";

export default function String(props) {
    return (
        <div className={checker.string}>
            {props.children}
        </div>
    )
}
