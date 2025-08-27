import styles from "./MetaInfoBlock.module.css";

interface MetaInfoBlockProps {
  info: string;
  value: number;
}

function MetaInfoBlock({ info, value }: MetaInfoBlockProps) {
  return (
    <div className={styles.container}>
      <p className={styles.info}>{info}:</p>
      <div className={styles.value}>{value}</div>
    </div>
  );
}

export default MetaInfoBlock;