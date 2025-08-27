import styles from "./ButtonContinue.module.css";
import arrow from "/icons/arrow-continue.svg";

interface ButtonContinueProps {
  onClick: () => void;
}

function ButtonContinue({ onClick }: ButtonContinueProps) {
  return <button className={styles.button} onClick={onClick}>Подробнее<img src={arrow} alt="arrow" /></button>;
}

export default ButtonContinue;