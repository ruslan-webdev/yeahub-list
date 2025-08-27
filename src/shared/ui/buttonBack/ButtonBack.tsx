import styles from "./ButtonBack.module.css";
import arrow from "/icons/arrow-back.svg";

interface IButtonBackProps {
  onClick: () => void;
}

function ButtonBack({ onClick }: IButtonBackProps) {
  return <button className={styles.button} onClick={onClick}><img src={arrow} alt="back" />Назад</button>;
}

export default ButtonBack;