import checker from "../styles/checker.module.css";

export default function codeTone(props) {
    return (
        <div className={checker.checker}>
            {props.tmpCodeName}
        </div>
    )

}
