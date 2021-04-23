import CodeTone from "../../components/codeTone";
import FingerBoard from "../../components/fingerBoard";
import checker from "../../styles/checker.module.css";
import React, { useState } from "react";
// import codeHandler from "../api/codeHandler";





type Props = {
    tmpCodeName: string
    className?: string
}

export const CodeChecker: React.FC<Props> = (props) => {
    const [codeName, setCodeName] = useState("C");
    return (
        <div className={`${checker.checker} ${checker.codeSelector} ${checker.tmp}`}>
            コード：
            <select id="codeSelector" name="codeSelector" title="codeSelector" className={checker.codeSelector} onChange={e =>  setCodeName(handleChange(e.target.value))}>
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

export const codeNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

const handleChange = (code: string): string => {
    const inputValue = code;
    const codeTone = [];
    let subscript: number;

    const subscriptAdjustment = () => {
        if ( subscript > 11 ) {
            subscript -= 12;
        }
    }

    codeNames.forEach( ( value, index, array ) => {
        subscript = index;
        if (inputValue === array[index]) {
            codeTone.push(array[subscript]);
        }
        subscript += 4;
        subscriptAdjustment();
        if (inputValue === array[index]) {
            codeTone.push(", " + array[subscript]);
        }
        subscript += 3;
        subscriptAdjustment();
        if ( subscript > 11 ) {
            subscript -= 12;
        }
        if (inputValue === array[index]) {
            codeTone.push(", " + array[subscript]);
        }    
    });
    return codeTone;
}


