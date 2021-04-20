import String from "./string";
import checker from "../styles/checker.module.css";

export default function FingerBoard() {
    const degree = "P5";
    return (
        <div className={checker.fingerBoard}>
            FingerBoard
            <String degree={degree}/>
            <String degree={degree}/>
            <String degree={degree}/>
            <String degree={degree}/>
            <String degree={degree}/>
            <String degree={degree}/>
        </div>
    )
}
