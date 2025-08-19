import { useNavigate, useParams } from "react-router-dom";

import styles from "./QuestionAnswer.module.css";
import { useGetAnswerQuery } from "../api/questionAnswerApi";
import MetaInfo from "./metaInfo/MetaInfo";
import ShortAnswer from "./shortAnswer/ShortAnswer";
import TitleAnswer from "./titleAnswer/TitleAnswer";
import DetailedAnswer from "./detailedAnswer/DetailedAnswer";
import { BACK_NAVIGATION } from "@/shared/config/constants";

function QuestionAnswer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useGetAnswerQuery({ id });

  function handleClickBack() {
    navigate(BACK_NAVIGATION);
  }

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error, change form later</p>;

  return (
    <div className={styles.container}>
      <button onClick={handleClickBack} className={styles.back}>
        Назад
      </button>
      <div className={styles.block}>
        <div className={styles.answer}>
          <TitleAnswer title={data.title} description={data.description} />
          <ShortAnswer shortAnswer={data.shortAnswer} />
          <DetailedAnswer longAnswer={data.longAnswer} />
        </div>
        <MetaInfo
          rate={data.rate}
          complexity={data.complexity}
          questionSkills={data.questionSkills}
          keywords={data.keywords}
          createdBy={data.createdBy.username}
        />
      </div>
    </div>
  );
}

export default QuestionAnswer;
