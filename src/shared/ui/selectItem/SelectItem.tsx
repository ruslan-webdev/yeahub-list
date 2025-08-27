import styles from "./SelectItem.module.css";

interface SelectItemProps {
  item: string;
  onClick?: () => void;
}

function SelectItem({ item, onClick }: SelectItemProps) {
  return <div className={styles.selectItem} onClick={onClick}>{item}</div>;
}

export default SelectItem;