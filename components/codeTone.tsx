import checkerStyles from "../styles/checker.module.css";
import tones from "../pages/posts/codeChecker";

export default function codeTone(props) {
    return (
        <div className={`${checkerStyles.checker} ${checkerStyles.codeTone}`}>
            {props.codeTones}
        </div>
    )
}
