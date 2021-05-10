import checkerStyles from "../styles/analyzer.module.css";
import tones from "../pages/posts/cordAnalyzer";

export default function cordTone(props) {
    return (
        <div className={`${checkerStyles.checker} ${checkerStyles.cordToneDisplay}`}>
            {props.cordTones}
        </div>
    )
}
