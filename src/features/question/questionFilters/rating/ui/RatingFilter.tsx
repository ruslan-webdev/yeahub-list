import styles from "./RatingFilter.module.css";
import SelectBlock from "@/shared/ui/SelectBlock/SelectBlock";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import { setRate } from "@/widgets/question/questionFilters/model/filtersSlice";

const RATING_FILTER_OPTIONS = [
  { id: 0, rating: 1 },
  { id: 1, rating: 2 },
  { id: 2, rating: 3 },
  { id: 3, rating: 4 },
  { id: 4, rating: 5 },
];

function RatingFilter() {
  const dispatch = useAppDispatch();
  const rate = useAppSelector(state => state.filters.rate);

  function handleSelectRating(rating: number) {
    dispatch(setRate(rating));
  }

  return (
    <div>
      <h3 className={styles.title}>Рейтинг</h3>
      <div className={styles.list}>
        {RATING_FILTER_OPTIONS.map(option => (
          <SelectBlock
            key={option.id}
            text={option.rating}
            onSelect={() => handleSelectRating(option.rating)}
            isActive={rate.includes(option.rating)}
          />
        ))}
      </div>
    </div>
  );
}

export default RatingFilter;
