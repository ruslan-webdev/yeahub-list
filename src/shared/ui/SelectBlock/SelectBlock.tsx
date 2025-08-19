import styles from "./SelectBlock.module.css";

interface SelectBlockProps {
  text: string | number;
  isActive?: boolean;
  onSelect?: () => void;
}

function SelectBlock({ text, onSelect, isActive }: SelectBlockProps) {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`} onClick={onSelect}>
      {text}
    </div>
  );
}

export default SelectBlock;