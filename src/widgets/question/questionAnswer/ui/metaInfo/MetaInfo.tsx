import styles from "./MetaInfo.module.css";
import MetaBlock from "@/shared/ui/MetaBlock/MetaBlock";
import SelectBlock from "@/shared/ui/SelectBlock/SelectBlock";
import type { MetaInfoProps } from "../../model/types";

function MetaInfo({ rate, complexity, questionSkills, keywords, createdBy }: MetaInfoProps) {
  return (
    <div className={styles.container}>
      <h4 className={styles.titleLevel}>Уровень:</h4>
      <div className={styles.metaBlocks}>
        <MetaBlock type="Сложность: " value={rate} />
        <MetaBlock type="Рейтинг: " value={complexity} />
      </div>
      <h4 className={styles.titleSkills}>Навыки:</h4>
      <div className={styles.skillsBlocks}>
        {questionSkills.map(skill => (
          <SelectBlock key={skill.id} text={skill.title} />
        ))}
      </div>
      <h4 className={styles.titleKeywords}>Ключевые слова: </h4>
      <div className={styles.keywordsBlock}>
        {keywords.map(keyword => (
          <p className={styles.keyword} key={keyword}>
            #{keyword}
          </p>
        ))}
      </div>
      <p>Автор: <p className={styles.author}>{createdBy}</p></p>
    </div>
  );
}

export default MetaInfo;