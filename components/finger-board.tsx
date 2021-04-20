import String from "../components/string";
import displayer from "../styles/displayer.module.css";

export default function FingerBoard() {
    return (
        <div className={displayer.fingerBoard}>
            FingerBoard
            <String />
            <String />
            <String />
            <String />
            <String />
            <String />
        </div>
    )
}
