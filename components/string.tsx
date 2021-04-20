import Fret from "../components/fret";
import checker from "../styles/checker.module.css";

export default function String(props) {
    return (
        <div className={checker.border}>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
            <Fret degree={props.degree}/>
        </div>
    )
}
