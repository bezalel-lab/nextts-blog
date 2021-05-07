import checkerStyles from "../styles/analyzer.module.css";
import tones from "../pages/posts/codeChecker";

export default function codeTone(props) {
    return (
        <div className={`${checkerStyles.checker} ${checkerStyles.codeToneDisplay}`}>
            {props.codeTones}
        </div>
    )
}
