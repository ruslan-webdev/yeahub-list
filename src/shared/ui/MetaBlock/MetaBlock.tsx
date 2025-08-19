import styles from "./MetaBlock.module.css";

interface IMetaBlock {
  type: string;
  value: number;
}

function MetaBlock({ type, value }: IMetaBlock) {
  return (
    <div className={styles.container}>
      <p className={styles.type}>{type}</p>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default MetaBlock;