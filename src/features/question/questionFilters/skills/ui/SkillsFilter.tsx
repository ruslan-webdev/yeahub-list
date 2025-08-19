import { useState } from "react";

import styles from "./SkillsFilter.module.css";
import { useGetSkillsQuery } from "../api/skillsApi";
import SelectBlock from "@/shared/ui/SelectBlock/SelectBlock";
import { DEFAULT_BOOLEAN_VALUE } from "@/shared/config/constants";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { setSkill } from "@/widgets/question/questionFilters/model/filtersSlice";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";

function SkillsFilter() {
  const dispatch = useAppDispatch();
  const { data: skills, isLoading, error } = useGetSkillsQuery();
  const [showAll, setShowAll] = useState<boolean>(DEFAULT_BOOLEAN_VALUE);
  const skillsArr = useAppSelector(state => state.filters.skills);
  const displayedSkills = showAll ? skills : skills?.slice(0, 8);

  function handleToggleShowSkills() {
    setShowAll(!showAll);
  }
  function handleSelectSkill(id: number) {
    dispatch(setSkill(id));
  }

  if (isLoading) return <p>Loading...</p>;
  if (error || !displayedSkills) return <p>Error, change form later</p>;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Навыки</h3>
      <div className={styles.list}>
        {displayedSkills.map(skill => (
          <SelectBlock
            key={skill.id}
            text={skill.title}
            onSelect={() => handleSelectSkill(skill.id)}
            isActive={skillsArr.includes(skill.id)}
          />
        ))}
      </div>
      <a onClick={handleToggleShowSkills} className={styles.showToggle}>
        {showAll ? "Скрыть" : "Посмотреть все"}
      </a>
    </div>
  );
}

export default SkillsFilter;
