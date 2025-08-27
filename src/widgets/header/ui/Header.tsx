import styles from "./Header.module.css";
import Button from "@/shared/ui/button/Button";
import Nav from "./nav/Nav";
import logo from "/icons/logo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <Nav />
      <div className={styles.buttons}>
        <Button children="Вход" variant="transparent"  />
        <Button children="Регистрация" />
      </div>
    </header>
  );
}

export default Header;