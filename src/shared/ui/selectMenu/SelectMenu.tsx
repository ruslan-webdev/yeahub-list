import { DEFAULT_BOOLEAN_VALUE } from "@/shared/config/constants";
import SelectItem from "../selectItem/SelectItem";
import styles from "./SelectMenu.module.css";
import { useState } from "react";

interface ISelectItem {
  id: number;
  title: string;
}

interface SelectMenuProps {
  items: ISelectItem[] | undefined;
  title: string;
  onClick: (id: number) => void;
}

function SelectMenu({ title, items, onClick }: SelectMenuProps) {
  const [showAll, setShowAll] = useState(DEFAULT_BOOLEAN_VALUE);
  const displayedItems = showAll ? items : items?.slice(0, 5);

  function handleClickShowAll() {
    setShowAll(!showAll);
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.items}>
        {displayedItems?.map(item => (
          <SelectItem key={item.id} item={item.title} onClick={() => onClick(item.id)} />
        ))}
      </div>
      {items && items.length > 5 && (
        <a className={styles.showAll} onClick={handleClickShowAll}>
          {showAll ? "Скрыть" : "Посмотреть все"}
        </a>
      )}
    </div>
  );
}

export default SelectMenu;
