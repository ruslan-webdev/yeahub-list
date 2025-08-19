import styles from "./Button.module.css";

import type { IButton } from "@/shared/model/types";

function Button({ children, variant = "primary" }: IButton) {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return <button className={buttonClass}>{children}</button>;
}

export default Button;
