import Image from 'next/image';
import utilStyles from "../styles/utils.module.css";

const Line = () => {
  return (
    <div className={`${utilStyles.lineMargin}`}>
      <div className={`${utilStyles.above}`}></div>
      <div className={`${utilStyles.under}`}></div>
    </div>
  );
};

export default Line;
