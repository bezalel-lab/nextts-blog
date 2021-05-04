import Fret from "../components/fret";
import checkerStyles from "../styles/checker.module.css";

export default function String(props) {
    return (
        <div className={`${props.className}`}>
            {props.children}
        </div>
    )
}
