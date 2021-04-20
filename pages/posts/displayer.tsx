import FingerBoard from "../../components/finger-board";
import displayer from "../../styles/displayer.module.css";

export default function Displayer() {
    return (
        <div className={displayer.tmp}>
            <div className={displayer.displayer}>
                Displayer
                <FingerBoard />
            </div>
            （開発中は目に優しい色を使用）
        </div>
    )
}
