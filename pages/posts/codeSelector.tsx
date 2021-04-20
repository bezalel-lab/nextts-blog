import CodeTone from "../../components/codeTone";
import FingerBoard from "../../components/fingerBoard";
import checker from "../../styles/checker.module.css";

type Props = {
    tmpCodeName: string
    className?: string
}

export const CodeSelector: React.FC<Props> = (props) => {
    const tmpCodeName = "構成音：C, E, G"
    return (
        <div className={`${checker.checker} ${checker.codeSelector}`}>
            コード：
            <select id="codeSelector" name="codeSelector" title="codeSelector" className={checker.codeSelector}>
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
            <FingerBoard />
        </div>
    )
}

export default CodeSelector