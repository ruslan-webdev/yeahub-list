import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import Button from "@/shared/ui/Button/Button";
import logo from "/images/logo.svg"

function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="logo" />
      <Nav />
      <div>
        <Button variant="transparent">Вход</Button>
        <Button>Регистрация</Button>
      </div>
    </header>
  );
}

export default Header;
