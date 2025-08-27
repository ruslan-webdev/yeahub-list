import { SearchFitlter } from "@/features/question/questionsFilters/search";
import styles from "./QuestionsFilters.module.css";
import { SpecializationFilter } from "@/features/question/questionsFilters/specialization";
import { SkillsFilter } from "@/features/question/questionsFilters/skills";
import { RatingFilter } from "@/features/question/questionsFilters/rating";

function QuestionsFilters() {
  return (
    <div className={styles.container}>
      <SearchFitlter />
      <SpecializationFilter />
      <SkillsFilter />
      <RatingFilter />
    </div>
  );
}

export default QuestionsFilters;