import CodeTone from "../../components/codeTone";
import FingerBoard from "../../components/fingerBoard";
import checker from "../../styles/checker.module.css";
import React, { useState } from "react";
import {codeSelector} from "../api/codeHandler";

codeSelector();

type Props = {
    tmpCodeName: string
    className?: string
}

export const CodeChecker: React.FC<Props> = (props) => {
    const [codeName, setCodeName] = useState("C");
    return (
        <div className={`${checker.checker} ${checker.codeSelector} ${checker.tmp}`}>
            コード：
            <select id="codeSelector" name="codeSelector" title="codeSelector" className={checker.codeSelector} onChange={() =>  alert("click")}>
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
            <CodeTone tmpCodeName={codeName}/>
            <FingerBoard />
            （開発中は目に優しい色を使用）
        </div>
    )
}

export default CodeChecker