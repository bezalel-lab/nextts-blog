import String from "./string";
import checker from "../styles/checker.module.css";

export default function FingerBoard(props) {
    return (
        <div className={checker.fingerBoard}>
            FingerBoard
            <String degree={props.degree}/>
            <String degree={props.degree}/>
            <String degree={props.degree}/>
            <String degree={props.degree}/>
            <String degree={props.degree}/>
            <String degree={props.degree}/>
        </div>
    )
}
