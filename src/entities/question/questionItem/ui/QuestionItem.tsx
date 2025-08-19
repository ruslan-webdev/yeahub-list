import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./QuestionItem.module.css";
import arrow from "/icons/arrow-question.svg";
import arrowCollapse from "/icons/arrow-collapse.svg";
import { DEFAULT_BOOLEAN_VALUE } from "@/shared/config/constants";
import type { IQuestion } from "@/shared/model/types";
import MetaBlock from "@/shared/ui/MetaBlock/MetaBlock";
import Separator from "@/shared/ui/Separator/Separator";

function QuestionItem({ id, title, complexity, rate, shortAnswer }: IQuestion) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(DEFAULT_BOOLEAN_VALUE);

  function handleClickArrow() {
    setIsOpen(!isOpen);
  }
  function handleClickDetails() {
    navigate(`/questions/public-questions/${id}`);
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.dot}></div>
        <p className={styles.title}>{title}</p>
        <img onClick={handleClickArrow} className={styles.arrow} src={isOpen ? arrowCollapse : arrow} alt="arrow" />
      </div>
      {isOpen && (
        <div className={styles.decription}>
          <div className={styles.meta}>
            <MetaBlock type="Рейтинг:" value={rate} />
            <MetaBlock type="Сложность:" value={complexity} />
          </div>
          <p className={styles.answer} dangerouslySetInnerHTML={{ __html: shortAnswer }}></p>
          <a onClick={handleClickDetails} className={styles.details}>
            Подробнее
          </a>
        </div>
      )}
      <Separator />
    </div>
  );
}

export default QuestionItem;
