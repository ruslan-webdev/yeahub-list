import { useState } from "react";

import styles from "./SpecializationsFilter.module.css";
import SelectBlock from "@/shared/ui/SelectBlock/SelectBlock";
import { useGetSpecializationsQuery } from "../api/specializationsApi";
import { DEFAULT_BOOLEAN_VALUE } from "@/shared/config/constants";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { resetSpecialization, setSpecialization } from "@/widgets/question/questionFilters/model/filtersSlice";

function SpecializationsFilter() {
  const dispatch = useAppDispatch();
  const { data: specializations, isLoading, error } = useGetSpecializationsQuery();
  const [showAll, setShowAll] = useState<boolean>(DEFAULT_BOOLEAN_VALUE);
  const displayedSpecializations = showAll ? specializations : specializations?.slice(0, 5);
  const currentSpecialization = useAppSelector(state => state.filters.specialization);

  function handleToggleShowSpecializations() {
    setShowAll(!showAll);
  }
  function handleSelectSpecialization(id: number) {
    dispatch(currentSpecialization === id ? resetSpecialization() : setSpecialization(id));
  }

  if (isLoading) return <p>Loading...</p>;
  if (error || !displayedSpecializations) return <p>Error, change form later</p>;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Специализация</h3>
      <div className={styles.list}>
        {displayedSpecializations.map(specialization => (
          <SelectBlock key={specialization.id} text={specialization.title} onSelect={() => handleSelectSpecialization(specialization.id)} />
        ))}
      </div>
      <a onClick={handleToggleShowSpecializations} className={styles.showToggle}>
        {showAll ? "Скрыть" : "Посмотреть все"}
      </a>
    </div>
  );
}

export default SpecializationsFilter;
