import MetaInfoBlock from "@/shared/ui/metaInfoBlock/MetaInfoBlock";
import styles from "./QustionInfo.module.css";
import type { ISkillsResponse } from "@/entities/skills/model/types";
import SelectItem from "@/shared/ui/selectItem/SelectItem";

interface IQuestionInfoProps {
  rate: number;
  complexity: number;
  questionSkills: ISkillsResponse[];
  keywords: string[];
}

function QuestionInfo({ rate, complexity, questionSkills, keywords }: IQuestionInfoProps) {

  const items = questionSkills.map(skill => ({
    id: skill.id,
    title: skill.title,
  }));

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h4 className={styles.title}>Уровень:</h4>
        <div className={styles.infoBlocks}>
          <MetaInfoBlock info="Сложность" value={complexity} />
          <MetaInfoBlock info="Рейтинг" value={rate}/>
        </div>
      </div>
      <div className={styles.box}>
        <h4 className={styles.title}>Навыки:</h4>
        {items.map(item => (
          <SelectItem key={item.id} item={item.title}/>
        ))}
      </div>
      <div className={styles.box}>
        <h4 className={styles.title}>Ключевые слова:</h4>
        {keywords.map(keyword => (
          <p className={styles.keyword}>#{keyword}</p>
        ))}
      </div>
    </div>
  );
}

export default QuestionInfo;