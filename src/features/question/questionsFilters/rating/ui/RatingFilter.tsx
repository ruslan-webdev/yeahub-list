import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import SelectMenu from "@/shared/ui/selectMenu/SelectMenu";
import { setRating } from "@/widgets/question/questionsFilters/model/filtersSlice";

const RATING_FILTER_OPTIONS = [
  { id: 1, rating: 1 },
  { id: 2, rating: 2 },
  { id: 3, rating: 3 },
  { id: 4, rating: 4 },
  { id: 5, rating: 5 },
];

function RatingFilter() {
  const dispatch = useAppDispatch();

  const items = RATING_FILTER_OPTIONS.map(rate => ({
    id: rate.id,
    rating: rate.rating,
    title: rate.rating.toString(),
  }));

  function handleClickRating(rating: number) {
    dispatch(setRating(rating));
  }

  return <SelectMenu title="Рейтинг" items={items} onClick={handleClickRating} />;
}

export default RatingFilter;
