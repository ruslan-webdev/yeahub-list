import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  variant?: "primary" | "transparent";
}

function Button({ children, variant = "primary" }: ButtonProps) {
  const buttonClass = `${styles.button} ${styles[variant]}`;

  return <button className={buttonClass}>{children}</button>;
}

export default Button;
