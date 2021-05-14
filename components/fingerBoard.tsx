import String from './string';
import Fret from './fret';
import checkerStyles from '../styles/analyzer.module.css';

export default function FingerBoard(props) {
  return (
    <div className={`${checkerStyles.fingerBoard} fingerBoardGlobal`}>
      {props.children}
    </div>
  );
}
