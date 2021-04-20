import CodeTone from "./codeTone";
import checker from "../styles/checker.module.css";

type Props = {
    tmpCodeName: string
}

export const CodeSelector: React.FC<Props> = (props) => {
    const tmpCodeName = props.tmpCodeName
    return (
        <div className={checker.checker}>
            コード：
            <select id="simple" name="simple" title="code-selector">
                <option>C</option>
                <option>C#</option>
                <option>D</option>
                <option>D#</option>
                <option>E</option>
                <option>F</option>
                <option>F#</option>
                <option>G</option>
                <option>G#</option>
                <option>A</option>
                <option>A#</option>
                <option>B</option>
            </select>
            <CodeTone tmpCodeName={tmpCodeName}/>
        </div>
    )
}
