import {CodeSelector} from "../../components/codeSelector";
import FingerBoard from "../../components/fingerBoard";
import checker from "../../styles/checker.module.css";

type Props = {
    degree: string
}

const Checker: React.FC<Props> = () => {
    const degree = "P5";
    const tmpCodeName = "構成音：C, E, G"
    return (
        <div className={checker.tmp}>
            <div className={checker.checker}>
                checker
                <CodeSelector tmpCodeName={tmpCodeName}/>
                <FingerBoard degree={degree}/>
            </div>
            （開発中は目に優しい色を使用）
        </div>
    )
}

export default Checker