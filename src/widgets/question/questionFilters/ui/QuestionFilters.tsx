import styles from "./QuestionFilters.module.css";
import SearchFilter from "@/features/question/questionFilters/search";
import SpecializationsFilter from "@/features/question/questionFilters/specializations";
import SkillsFilter from "@/features/question/questionFilters/skills";
import LevelFilter from "@/features/question/questionFilters/level";
import RatingFilter from "@/features/question/questionFilters/rating";

function QuestionFilters() {
  return (
    <div className={styles.container}>
      <SearchFilter />
      <SpecializationsFilter />
      <SkillsFilter />
      <LevelFilter />
      <RatingFilter />
    </div>
  );
}

export default QuestionFilters;