import { useEffect, useState } from "react";

import styles from "./SearchFitlter.module.css";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { DEFAULT_SEARCH_VALUE } from "../model/config";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { setTitle } from "@/widgets/question/questionsFilters/model/filtersSlice";

function SearchFitlter() {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState(DEFAULT_SEARCH_VALUE);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(setTitle(debouncedSearchValue));
  }, [debouncedSearchValue, dispatch]);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return <input className={styles.input} onChange={handleChangeInput} type="search" placeholder="Введите запрос..." />;
}

export default SearchFitlter;