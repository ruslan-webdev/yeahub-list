import styles from "./LevelFilter.module.css";
import SelectBlock from "@/shared/ui/SelectBlock/SelectBlock";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { setComplexity } from "@/widgets/question/questionFilters/model/filtersSlice";

const LEVEL_FILTER_OPTIONS = [
  { id: 0, value: "1-3" },
  { id: 1, value: "4-6" },
  { id: 2, value: "7-8" },
  { id: 3, value: "9-10" },
];

function LevelFilter() {
  const dispatch = useAppDispatch();
  const complexity = useAppSelector(state => state.filters.complexity);

  function handleSelectLevel(complexity: string) {
    dispatch(setComplexity(complexity));
  }

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Уровень сложности</h3>
      <div className={styles.list}>
        {LEVEL_FILTER_OPTIONS.map(option => (
          <SelectBlock
            key={option.id}
            text={option.value}
            onSelect={() => handleSelectLevel(option.value)}
            isActive={complexity.includes(option.value)}
          />
        ))}
      </div>
    </div>
  );
}

export default LevelFilter;
