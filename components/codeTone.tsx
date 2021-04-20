import checker from "../styles/checker.module.css";

export default function codeTone(props) {
    return (
        <div className={`${checker.checker} ${checker.codeTone}`}>
            {props.tmpCodeName}
        </div>
    )

}
